import EvaluadorEntity from "../models/EvaluadorEntity";

export default interface IEvaluadorRepository{
    findAll():Promise<EvaluadorEntity[]>;
    findOne(id:number):Promise<EvaluadorEntity[]>;
    asignarEvaluador(id:number, evaluadores:EvaluadorEntity[]):Promise<EvaluadorEntity[]>
    eliminarEvaluador(id:number, evaluador:number):Promise<boolean>;
    verificarEvaluador(ev1:number, ev2:number):Promise<EvaluadorEntity[]>;
    verificarAsignados(prc:number):Promise<EvaluadorEntity[]>;
}