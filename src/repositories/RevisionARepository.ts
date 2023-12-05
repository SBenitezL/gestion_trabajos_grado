import RevisionAEntity from '../models/RevisionAEntity';
import IRevisionARepository from './IRevisionARepository';
import db from '../database/Database';

class RevisionARepository implements IRevisionARepository
{
    public constructor()
    {
    }   
    //pendiente
    public async listarFormatosA(): Promise<RevisionAEntity[]> {
        const query = "call ConsultarRevisionA()";
        const res:RevisionAEntity[] = []
        try{
            const [result]:RevisionAEntity|any = await db.query(query);
            result[0].map((row:RevisionAEntity)=>{
                res.push(row);
            })
            console.log(result);
        }catch(error)
        {
        }
        return res;
    }
    public async cambiarEstadoFormatoA(codigo:number): Promise<RevisionAEntity[]> {
        const query = "call cambiarEstadoFormatoA(?)";
        const query2="call consultarEstadoFormA(?)"
        const res:RevisionAEntity[] = []
        try{
            const [result]:RevisionAEntity|any = await db.query(query,[codigo]);
            if(result){
                const [result2]:RevisionAEntity|any = await db.query(query2,[codigo]);

                result2[0].map((row:RevisionAEntity)=>{
                    res.push(row);
                })
            }
            
            console.log(result);
        }catch(error)
        {
        }
        return res;
    }

}
const datos = new RevisionARepository();
export default datos;