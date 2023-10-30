import ProcesoEntity from "../../models/ProcesoEntity";
import ProcesoDTO from "../DTO/ProcesoDTO";
import ProcesoListDTO from "../DTO/ProcesoListDTO";
import IGestionarProcesoDirector from "./IGestionarProcesoDirector";
import ProcesoMapper from "../Maping/ProcesoMapper";
import IGestProcesoDirectorRpstr from "../../repositories/IGestProcesoDirectorRpstr";
import datos from "../../repositories/GestionProcesoRepository";
class GestionarProcesoDirector implements IGestionarProcesoDirector
{
    private accesoPersistencia:IGestProcesoDirectorRpstr;
    private mapper:ProcesoMapper;
    public constructor(persistencia:IGestProcesoDirectorRpstr){
        this.accesoPersistencia = persistencia;
        this.mapper = new ProcesoMapper();
    }
    public async crearProceso(proceso: ProcesoDTO): Promise<ProcesoDTO> {
        let res = new ProcesoDTO(0,0,0,0,0,"",0,0,0,"","",[]);
        if(proceso.estudiantes.length == 0) return res;
        if(this.verificarInvestigacion(proceso) || this.verificarPractica(proceso))
        {
            console.log('Entra');
            let entity = this.mapper.dtoToEntity(proceso);
            try{
               entity = await this.accesoPersistencia.crearProceso(entity);
               res = this.mapper.entityToDTO(entity);
            }catch(error)
            {
            }
        }
        return res;
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
    private verificarPractica(proceso:ProcesoDTO):boolean
    {
        return (proceso.tipo == "Práctica profesional" && proceso.estudiantes.length == 1 && (proceso.ase != null && proceso.ase != ''));
    }
    private verificarInvestigacion(proceso:ProcesoDTO)
    {
        return (proceso.tipo == "Trabajo de investigación" && proceso.estudiantes.length <=2 && proceso.ase == null);
    }

}
const gestionProcesosImpl = new GestionarProcesoDirector(datos);
export default gestionProcesosImpl;