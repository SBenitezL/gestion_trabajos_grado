import { ResultSetHeader } from 'mysql2';
import db from '../database/Database';
import ProcesoEntity from '../models/ProcesoEntity';
import ProcesoListEntity from '../models/ProcesoListEntity';
import IGestProcesoDirectorRpstr from './IGestProcesoDirectorRpstr';
import path from 'path';
class GestionProcesoRepository implements IGestProcesoDirectorRpstr{
    public constructor()
    {

    }
    public async enviarFormatoA(id: number): Promise<boolean> {
        const query = "update proceso set prc_form_a = 1 where a_id = ?"
        const query2 = "update ti_a set A_revision = CURRENT_DATE, A_NO_REVISION = A_NO_REVISION + 1 where a_id = ?";
        try{
            const [result]:any = await db.query(query2,[id]);
            console.log(result);
            if(result.affectedRows == 1)
            {
                await db.query(query,[id]);
                return true;
            }
            else{
                return false;
            }
        }catch(error)
        {
            return false;
        }
    }
    public async crearProceso(proceso: ProcesoEntity): Promise<ProcesoEntity> {
        const query = " call ContarRegistrosPrcIdAnioActual(?,?,?,?)";
        const query2 = "update estudiante set prc_id = ? where est_codigo = ?";
        let prc:ProcesoEntity = new ProcesoEntity(0,0,0,0,0,"",0,0,0,"","",[]);
        try{
            if(! await this.verificarDirector(proceso.usr_codigo))
            {
                return prc;
            }
            const [resP]:any = await db.query(query,[proceso.usr_codigo, proceso.nom_asesor, proceso.prc_titulo, proceso.prc_tipo]);
            const res:ProcesoEntity = resP[0][0];
            console.log(res);
            console.log('resp', resP);
            prc = new ProcesoEntity(res.prc_id, res.usr_codigo,res.a_id,res.b_id,res.c_id,res.prc_titulo,res.prc_form_a,res.prc_form_b,res.prc_form_c,res.prc_tipo,res.nom_asesor,[]);
            const promises = proceso.est_cod.map(async (row)=>{
                let [res2]:ResultSetHeader|any =  await db.query(query2,[prc.prc_id,row]);
                console.log(res2);
                if(res2.affectedRows>0)
                {
                    prc.est_cod.push(row);
                }
            });
            await Promise.all(promises);
        }catch(error)
        {
            console.log("error repositorio");
        }
        console.log(prc);
       return prc;
    }
    public async actualizarProceso(id:number, proceso:ProcesoEntity):Promise<ProcesoEntity>
    {
        const query = ""
        throw new Error("Method not implemented.");
    }
    public async eliminarProceso(id:number):Promise<boolean>
    {

        throw new Error("Method not implemented.");
    }
    public async consultarProceso(id:number):Promise<ProcesoEntity>
    {
       const query ="SELECT prc_id, usr_codigo, a_id, b_id, c_id, nom_asesor, prc_form_a, prc_form_b, prc_form_c, prc_titulo, prc_tipo FROM PROCESO WHERE prc_id = ?";
       const res: ProcesoEntity = new ProcesoEntity(0,0,0,0,0,"",0,0,0,"","",[]); // Crear un objeto vacío
       try {
            
           const [result]: ProcesoEntity[] | any = await db.query(query, [id]);
           
           if (result.length > 0) {
            console.log(result[0]);
                 return result[0]; 
           }
           console.log("salio");
           return res; 
       } catch (error) {
           throw error; 
       }
    }
    public async consultarProcesos():Promise<ProcesoListEntity[]>
    {
       // const query = "SELECT p.prc_titulo, p.prc_tipo, e.est_nombre FROM proceso p INNER JOIN estudiante e ON p.PRC_ID=e.PRC_ID WHERE p.prc_id =?;";
       const query ="SELECT proceso.prc_id, prc_titulo, prc_tipo, est_nombre FROM proceso INNER JOIN estudiante ON proceso.PRC_ID=estudiante.PRC_ID ORDER BY est_nombre"; 
       const res: ProcesoListEntity[]=[];
        try{
            const [result]:any  = await db.query(query);
            result.map((row:ProcesoListEntity)=>{
                console.log(row);
                res.push(row);})
        } catch(error){
            return res;
        }
        return res;
    }
    public async verificarDirector(dir:number):Promise<boolean>
    {
        const query = "Select usr_codigo, rol_id from usuariorol where usr_codigo = ? and rol_id = 2";
        try{
            const [res]:any = await db.query(query,[dir]);
            return res.length > 0;
        }catch(error)
        {
            return false;
        }
    }
}
const datos = new GestionProcesoRepository();
export default datos;