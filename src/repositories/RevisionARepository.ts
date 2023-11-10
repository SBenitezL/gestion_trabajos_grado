import RevisionAEntity from '../models/RevisionAEntity';
import IRevisionARepository from './IRevisionARepository';
import db from '../database/Database';

export default class RevisionARepository implements IRevisionARepository
{
    public constructor()
    {
    }   
    public async listarFormatosA(): Promise<RevisionAEntity[]> {
        const query = "call ConsultarRevisionA()";
        const res:RevisionAEntity[] = []
        try{
            const [result]:RevisionAEntity|any = await db.query(query);
            result.map((row:RevisionAEntity)=>{
                res.push(row);
            })
        }catch(error)
        {
        }
        return res;
    }
}