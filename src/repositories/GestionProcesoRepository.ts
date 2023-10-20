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
        const query = ""
        throw new Error("Method not implemented.");
    }
    public async eliminarProceso(id:number):Promise<boolean>
    {
        throw new Error("Method not implemented.");
    }
    public async consultarProceso(id:number):Promise<ProcesoEntity>
    {
        const query ="SELECT * FROM PROCESO WHERE PRC_ID = ?";
        
        throw new Error("Method not implemented.");   
    }
    public async consultarProcesos(id:number):Promise<ProcesoListEntity[]>
    {
        //revisar prc_tipo y la igualdad 
        const query = "SELECT p.prc_titulo, p.prc_tipo, e.est_nombre FROM proceso p INNER JOIN estudiante e ON p.PRC_ID=e.PRC_ID WHERE p.prc_id =?;";
        const res: ProcesoListEntity[]=[];
        try{
            const [result]:ProcesoListEntity|any  = await db.query(query,[id]);
            result.map((row:ProcesoListEntity)=>{
                res.push(row);})
        } catch(error){
            return res;
        }
        return res;
    }
}