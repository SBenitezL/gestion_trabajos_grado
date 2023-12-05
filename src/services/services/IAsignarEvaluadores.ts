import EvaluadorDTO from "../DTO/EvaluadorDTO";

export default interface IAsignarEvaluadores
{
    /**
     * @route PATCH /api/evaluadores/procesos?id=
     * @param {number} id query param que representa el id del proceso 
     * @param {EvaluadorDTO} evaluadores Body del request, información de los evaluadores
     */
    asignarEvaluador(id:number, evaluadores:EvaluadorDTO[]):Promise<EvaluadorDTO[]|null>
    
    /**
     * @route DELETE /api/evaluadores/:evaluador?id=
     * @param {number} id query param que representa el proceso del cual busca desvincular al evaluador 
     * @param {number} evaluador param que representa el evaluador
     */
    eliminarEvaluador(id:number, evaluador:number):Promise<boolean>;
}