import ProcesoEntity from "../../models/ProcesoEntity"
import ProcesoDTO from "../DTO/ProcesoDTO"
import ProcesoListDTO from "../DTO/ProcesoListDTO"
export default interface IGestionarProcesoDirector{
    /**
     * @route PUT api/procesos/:id
     * @param id 
     * @param proceso 
     */
    actualizarProceso(id:number, proceso:ProcesoDTO):Promise<ProcesoDTO>
    /**
     * @route DELETE api/procesos/:id
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
}