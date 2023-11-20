import EvaluadorDTO from "../DTO/EvaluadorDTO";

export default interface IAsignarEvaluadores
{
    /**
     * @route PATCH /api/procesos/evaluadores?id=
     * @param {number} id query param que representa el id del proceso 
     * @param {EvaluadorDTO} evaluadores Body del request, información de los evaluadores
     */
    asignarEvaluador(id:number, evaluadores:EvaluadorDTO[]):Promise<EvaluadorDTO[]>
}