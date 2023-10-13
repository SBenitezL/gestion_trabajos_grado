import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
import FormatoAEntity from '../models/FormatoAEntity';
export default class GestionFormatoARepository
{
    public constructor()
    {
    }
    public async crearFormatoA(formato: FormatoAEntity[]): Promise<FormatoAEntity[]>{
        //TODO: Refactorizar
        const query1 = "insert into TI_A values(?,?,?,?,?,?,?,SYSDATE,?,?)";
        const query3 = "SELECT *  FROM TI_A WHERE a_id = ?";
        const form:FormatoAEntity = new FormatoAEntity(formato[0].a_id,formato[0].a_objetivos,formato[0].a_con_entrega,formato[0].a_realizacion,formato[0].a_recursos,formato[0].a_financiacion,formato[0].a_per_programa,formato[0].a_revision,formato[0].a_recibido,formato[0].a_observaciones,formato[0].a_no_revision);
        const res:FormatoAEntity[] =  [];
        try{
            
            const [result]:any = await db.query(query1,[form.a_objetivos,form.a_con_entrega,form.a_realizacion,form.a_recursos,form.a_financiacion,form.a_per_programa,form.a_revision,form.a_observaciones,form.a_no_revision]);
            if(result.affectedRows == 1)
            {
                
                const [result2]:FormatoAEntity|any = await db.query(query3,[form.a_id]);
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
}