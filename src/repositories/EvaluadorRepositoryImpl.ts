import EvaluadorEntity from "../models/EvaluadorEntity";
import IEvaluadorRepository from "./IEvaluadorRepositoyry";
import db from "../database/Database";

export default class EvaluadorRepositoryImpl implements IEvaluadorRepository{
    async findAll(): Promise<EvaluadorEntity[]> {
        const query = "call recuperarEvaluadores()";
        const res:EvaluadorEntity[] = []
        try{
            const [result]:EvaluadorEntity[]|any = await db.query(query);
            result[0].map( (row:EvaluadorEntity)=>{
                res.push(row);
            });
            return res;
        }catch{
        }
        return res;
    }
    findOne(id: number): Promise<EvaluadorEntity[]> {
        throw new Error("Method not implemented.");
    }
    
}