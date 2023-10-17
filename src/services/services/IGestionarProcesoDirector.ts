import ProcesoEntity from "../../models/ProcesoEntity"
export default interface IGestionarProcesoDirector{
    /**
     * @route POST api/procesos
     * @param {ProcesoEntity} proceso
     */
    crearProceso(proceso:ProcesoEntity):Promise<ProcesoEntity>;
    /**
     * @route PUT api/procesos/:id
     * @param id 
     * @param proceso 
     */
    actualizarProceso(id:number, proceso:ProcesoEntity):Promise<ProcesoEntity>
    /**
     * @route DELETE api/procesos/:id
     * @param id 
     */
    eliminarProceso(id:number):Promise<boolean>
    /**
     * @route GET api/procesos/:id
     * @param id 
     */
    consultarProceso(id:number):Promise<ProcesoEntity>
    /**
     * @route GET api/procesos
     */
    consultarProcesos():Promise<ProcesoEntity[]>
    /**
     * @route GET api/procesos/estudiantes/:cod
     * @param cod 
     */
    consultarProceso(cod:number):Promise<ProcesoEntity>
}