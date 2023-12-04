import EvaluadorDTO from "../DTO/EvaluadorDTO";
import RevisionADTO from "../DTO/RevisionADTO";

export default interface IEvaluadores{

    /**
     * @route GET /api/evaluadores
     */
    consultarEvaluadores():Promise<EvaluadorDTO[]>


    listarAnteproyectos(id:number): Promise<RevisionADTO[]|null>;

}