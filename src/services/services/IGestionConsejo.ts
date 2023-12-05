import RevisionADTO from "../DTO/RevisionADTO";

export default interface IGestionConsejo
{
    /**
     * @route GET api/consejo/formato/a/:usuarioId
     * @param {number} usuarioId identificador del usuario
     */
    listarFormatosA(usuarioId:number):Promise<RevisionADTO[]|null>
}