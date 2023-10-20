import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import { query } from 'express';
import ProcesoEntity from '../models/ProcesoEntity';
import ProcesoListEntity from '../models/ProcesoListEntity';
export default class GestionProcesoRepository{
    public constructor()
    {

    }
    public async actualizarProceso(id:number, proceso:ProcesoEntity):Promise<ProcesoEntity>
    {
        throw new Error("Method not implemented.");
    }
    public async eliminarProceso(id:number):Promise<boolean>
    {
        throw new Error("Method not implemented.");
    }
    public async consultarProceso(id:number):Promise<ProcesoEntity>
    {
       const query ="SELECT PRC_ID, USR_CODIGO, A_ID, B_ID, C_ID, ASE_CC, PRC_FORM_A, PRC_FORM_B, PRC_FORM_C, PRC_TITULO, PRC_TIPO FROM PROCESO WHERE PRC_ID = ?";
       const res: ProcesoEntity = new ProcesoEntity(0,0,0,0,0,0,false,false,false,"",""); // Crear un objeto vacío
    
       try {
           const [result]: ProcesoEntity[] | any = await db.query(query, [id]);
   
           if (result.length > 0) {
               return result[0]; 
           }
   
           return res; 
       } catch (error) {
           throw error; 
       }
    }
    public async consultarProcesos():Promise<ProcesoListEntity[]>
    {
       // const query = "SELECT p.prc_titulo, p.prc_tipo, e.est_nombre FROM proceso p INNER JOIN estudiante e ON p.PRC_ID=e.PRC_ID WHERE p.prc_id =?;";
       const query ="SELECT p.prc_titulo, p.prc_tipo, e.est_nombre FROM proceso p INNER JOIN estudiante e ON p.PRC_ID=e.PRC_ID"; 
       const res: ProcesoListEntity[]=[];
        try{
            const [result]:ProcesoListEntity|any  = await db.query(query);
            result.map((row:ProcesoListEntity)=>{
                res.push(row);})
        } catch(error){
            return res;
        }
        return res;
    }
}