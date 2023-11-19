import EvaluadorDTO from "../DTO/EvaluadorDTO";

export default interface IEvaluadores{

    /**
     * @route GET /api/evaluadores
     */
    consultarEvaluadores():Promise<EvaluadorDTO[]>
}