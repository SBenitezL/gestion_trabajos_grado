import ProcesoEntity from "../../models/ProcesoEntity";
import ProcesoDTO from "../DTO/ProcesoDTO";
import ProcesoListDTO from "../DTO/ProcesoListDTO";
import IGestionarProcesoDirector from "./IGestionarProcesoDirector";

export default class GestionarProcesoDirector implements IGestionarProcesoDirector
{
    actualizarProceso(id: number, proceso: ProcesoDTO): Promise<ProcesoDTO> {
        throw new Error("Method not implemented.");
    }
    eliminarProceso(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    consultarProceso(id: number): Promise<ProcesoDTO> {
        throw new Error("Method not implemented.");
    }
    consultarProcesos(): Promise<ProcesoListDTO[]> {
        throw new Error("Method not implemented.");
    }
    

}