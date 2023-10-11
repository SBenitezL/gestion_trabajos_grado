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
        const query1 = "insert into TI_A values(?,?,?,?,?,?,?,?,?,?,?)";
        const query3 = "";
        const form:FormatoAEntity = new FormatoAEntity(formato[0].a_id,formato[0].a_objetivos,formato[0].a_con_entrega,formato[0].a_realizacion,formato[0].a_recursos,formato[0].a_financiacion,formato[0].a_per_programa,formato[0].a_revision,formato[0].a_recibido,formato[0].a_observaciones,formato[0].a_no_revision);
        const res:FormatoAEntity[] =  [];
        try{
            const [result]:any = await db.query(query1,[form.a_id,form.a_objetivos,form.a_con_entrega,form.a_realizacion,form.a_recursos,form.a_financiacion,form.a_per_programa,form.a_revision,form.a_recibido,form.a_observaciones,form.a_no_revision]);
            if(result.affectedRows == 1)
            {
                console.log("entra");
                formato.forEach(async (row)=>{
                    //proceso y areas
                   // await db.query();
                })
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
}