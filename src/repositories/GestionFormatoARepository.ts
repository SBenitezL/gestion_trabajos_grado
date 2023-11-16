import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
import FormatoAEntity from '../models/FormatoAEntity';
import { Console } from 'console';
export default class GestionFormatoARepository
{
    public constructor()
    {
    }
    public async crearFormatoA(id:number, formato: FormatoAEntity[]): Promise<FormatoAEntity[]>{
        //TODO: Refactorizar
        const query1 = "INSERT INTO TI_A (A_OBJETIVOS, A_CON_ENTREGA, A_REALIZACION, A_RECURSOS, A_FINANCIACION, A_PER_PROGRAMA, A_RECIBIDO, A_OBSERVACIONES, A_NO_REVISION) VALUES (?, ?, ?, ?, ?, ?, ? , ? , ?)";
        const query2 = "Update proceso set a_id = ? where prc_id = ?"
        const query3 = "SELECT *  FROM TI_A WHERE a_id = ?";
        console.log(id);
        
        const form:FormatoAEntity = new FormatoAEntity(formato[0].a_id,formato[0].a_objetivos,formato[0].a_con_entrega,formato[0].a_realizacion,formato[0].a_recursos,formato[0].a_financiacion,formato[0].a_per_programa,formato[0].a_revision,formato[0].a_recibido,formato[0].a_observaciones,formato[0].a_no_revision);
        const res:FormatoAEntity[] =  [];
        try{            
            const [result]:any = await db.query(query1,[form.a_objetivos,form.a_con_entrega,form.a_realizacion,form.a_recursos,form.a_financiacion,form.a_per_programa,form.a_revision,form.a_observaciones,form.a_no_revision]);
            if(result.affectedRows === 1)
            {
                await db.query(query2,[result.insertId,id]);
                const [result2]:FormatoAEntity|any = await db.query(query3,[result.insertId]);
                result2.map((row:FormatoAEntity)=>{
                    res.push(row);
                })
            }
           
        }catch(error)
        {
            return res;
        }
        return res;
    }
    public async actualizarFormatoA(id:number, formato:FormatoAEntity[]):Promise<FormatoAEntity[]>
    {
        const query = "UPDATE ti_a SET A_OBJETIVOS = ?, A_CON_ENTREGA = ?, A_REALIZACION = ?, A_RECURSOS = ?, A_FINANCIACION = ?, A_PER_PROGRAMA = ?, A_REVISION = ?, A_RECIBIDO = ?, A_OBSERVACIONES = ?, A_NO_REVISION = ?";
        const query2 = "SELECT * FROM TI_A where A_ID = ?";
        const res:FormatoAEntity[] = [];
        try{
            const [result]:any = await db.query(query,[formato[0].a_id,formato[0].a_objetivos,formato[0].a_con_entrega,formato[0].a_realizacion,formato[0].a_recursos,formato[0].a_financiacion,formato[0].a_per_programa,formato[0].a_revision,formato[0].a_recibido,formato[0].a_observaciones,formato[0].a_no_revision]);
            if(result.affectedRows != 0)
            {
                const [result2]:FormatoAEntity|any = await db.query(query2, formato[0].a_id);
                result2.map((row:FormatoAEntity)=>{
                    res.push(row);
                })
            }
            return result;
        }catch(error)
        {
            return [];
        }
    }
    public async EliminarFormatoA(id: number):Promise<boolean>{
        //TODO: Refactorizar
        //PROCESO RELACION
        const query1 = "DELETE FROM TI_A WHERE a_id = ?";
        try{
            await db.query(query1,[id]);
            
            return true;
        }catch(error)
        {
            console.error("Error al eliminar FORMATO A:", error);
            return false;
        }
    }
    public async consultarFormatoA(prcId:number):Promise<FormatoAEntity[]>
    {
        const query = "select ti_a.a_id, a_objetivos, a_con_entrega, a_realizacion,  a_recursos,  a_financiacion, a_per_programa,  a_revision,  a_recibido,  a_observaciones, a_no_revision from ti_a inner join proceso on ti_a.a_id = proceso.a_id where prc_id = ?";
        let result :FormatoAEntity[]= [];
        try{
            const [res]:any = await db.query(query,[prcId])
            console.log(res);
            res.map((row:FormatoAEntity)=>{
                result.push(row);
            })
        }catch(error){
            console.log("error")
        }
        return result;
    }
    public async descargarFormato(id:number) {
        const query="SELECT ruta FROM tabla WHERE IDUSUARIO=?";
        try{
            const [res]:any = await db.query(query,[id])
            const resp = null;
        }catch(error){
            console.log("error")
        }
    }
}