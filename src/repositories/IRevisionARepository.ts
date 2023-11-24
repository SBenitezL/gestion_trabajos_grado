import RevisionAEntity from "../models/RevisionAEntity";


export default interface IRevisionARepository{
    listarFormatosA():Promise<RevisionAEntity[]>;
    cambiarEstadoFormatoA(codigo:number): Promise<RevisionAEntity[]>
}