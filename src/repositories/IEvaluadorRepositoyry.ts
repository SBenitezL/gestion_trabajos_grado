import EvaluadorEntity from "../models/EvaluadorEntity";

export default interface IEvaluadorRepository{
    findAll():Promise<EvaluadorEntity[]>;
    findOne(id:number):Promise<EvaluadorEntity[]>
}