import RevisionAEntity from "../models/RevisionAEntity";


export default interface IRevisionARepository{
    listarFormatosA():Promise<RevisionAEntity[]>;
}