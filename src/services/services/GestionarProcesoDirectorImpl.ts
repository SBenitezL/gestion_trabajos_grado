import ProcesoEntity from "../../models/ProcesoEntity";
import ProcesoDTO from "../DTO/ProcesoDTO";
import ProcesoListDTO from "../DTO/ProcesoListDTO";
import IGestionarProcesoDirector from "./IGestionarProcesoDirector";
import ProcesoMapper from "../Maping/ProcesoMapper";
import GestionProcesoRepository from "../../repositories/GestionProcesoRepository";
class GestionarProcesoDirector implements IGestionarProcesoDirector
{
    private accesoPersistencia:GestionProcesoRepository;
    private mapper:ProcesoMapper;
    public constructor(){
        this.accesoPersistencia = new GestionProcesoRepository();
        this.mapper = new ProcesoMapper();
    }
    actualizarProceso(id: number, proceso: ProcesoDTO): Promise<ProcesoDTO> {
        throw new Error("Method not implemented.");
    }
    eliminarProceso(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async consultarProceso(id: number): Promise<ProcesoDTO> {
        const res = await this.accesoPersistencia.consultarProceso(id);
         return this.mapper.entityToDTO(res);

    }
    public async consultarProcesos(): Promise<ProcesoListDTO[]> {
       const res = await this.accesoPersistencia.consultarProcesos();
        return this.mapper.listEntityToDTO(res);
    }
    

}
const gestionProcesosImpl = new GestionarProcesoDirector();
export default gestionProcesosImpl;