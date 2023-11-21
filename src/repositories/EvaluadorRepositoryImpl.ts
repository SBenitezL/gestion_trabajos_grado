import EvaluadorEntity from "../models/EvaluadorEntity";
import IEvaluadorRepository from "./IEvaluadorRepositoyry";
import db from "../database/Database";

class EvaluadorRepositoryImpl implements IEvaluadorRepository{
    async findAll(): Promise<EvaluadorEntity[]> {
        const query = "call recuperarEvaluadores()";
        try{
            const [res]:EvaluadorEntity[]|any = await db.query(query);
            
        }catch{

        }
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<EvaluadorEntity[]> {
        throw new Error("Method not implemented.");
    }
    
}