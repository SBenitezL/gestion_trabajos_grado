import ProcesoDTO from "../DTO/ProcesoDTO"
import ProcesoListDTO from "../DTO/ProcesoListDTO"
export default interface IGestionarProcesoDirector{
    /**
     * @route POST api/procesos?dir=
     * @param proceso 
     */
    crearProceso(proceso:ProcesoDTO):Promise<ProcesoDTO>;
    /**
     * @route PUT api/procesos/:id
     * @param id 
     * @param proceso 
     */
    actualizarProceso(id:number, proceso:ProcesoDTO):Promise<ProcesoDTO>
    /**
     * @route PATCH api/procesos/:id
     * @param id 
     */
    eliminarProceso(id:number):Promise<boolean>
    /**
     * @route GET api/procesos/:id
     * @param id 
     */
    consultarProceso(id:number):Promise<ProcesoDTO>
    /**
     * @route GET api/procesos
     */
    consultarProcesos():Promise<ProcesoListDTO[]>
    /**
     * @route POST  /api/procesos/formatos/:id
     * @param {number} id Id del procesoa  enviar.
     */
    enviarFormatoA(id:number):Promise<boolean>
}