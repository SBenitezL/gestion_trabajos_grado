import RevisionADTO from "../DTO/RevisionADTO";

export default interface IRevisionA
{
    /**
     * @route GET /api/revisiones/:cod
     * @param {number} cod código del usuario que realiza la petición.
     */
    listarProcesos(cod:number):Promise<RevisionADTO>;
}