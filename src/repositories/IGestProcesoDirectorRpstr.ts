import ProcesoEntity from "../models/ProcesoEntity";
import ProcesoListEntity from "../models/ProcesoListEntity";

export default interface IGestProcesoDirectorRpstr{
    crearProceso(proceso:ProcesoEntity):Promise<ProcesoEntity>;
    actualizarProceso(id:number, proceso:ProcesoEntity):Promise<ProcesoEntity>;
    eliminarProceso(id:number):Promise<boolean>;
    consultarProceso(id:number):Promise<ProcesoEntity>;
    consultarProcesos():Promise<ProcesoListEntity[]>
}