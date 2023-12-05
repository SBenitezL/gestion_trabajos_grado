import ProcesoEntity from "../../models/ProcesoEntity";
import ProcesoDTO from "../DTO/ProcesoDTO";
import ProcesoListDTO from "../DTO/ProcesoListDTO";
import IGestionarProcesoDirector from "./IGestionarProcesoDirector";
import ProcesoMapper from "../Maping/ProcesoMapper";
import IGestProcesoDirectorRpstr from "../../repositories/IGestProcesoDirectorRpstr";
import datos from "../../repositories/GestionProcesoRepository";
import path from "path";
import IReporteA from "../../repositories/report/gateway/IReporteA";
import reporteA from "../../repositories/report/repositories/ReporteARepository";
import createPDFFA from "../makePDF/src/services/PDFServices";
import GestionFormatoARepository from "../../repositories/GestionFormatoARepository";
import FormatoAMapper from "../Maping/FormatoAMapper";
class GestionarProcesoDirector implements IGestionarProcesoDirector
{
    private accesoPersistencia:IGestProcesoDirectorRpstr;
    private mapper:ProcesoMapper;
    private formato:GestionFormatoARepository;
    private fMapper:FormatoAMapper;
    public constructor(persistencia:IGestProcesoDirectorRpstr,private reporte:IReporteA){
        this.accesoPersistencia = persistencia;
        this.mapper = new ProcesoMapper();
        this.formato = new GestionFormatoARepository();
        this.fMapper = new FormatoAMapper();
    }
    
    async enviarFormatoA(id: number, prc:number): Promise<boolean> {
        const formatoA = await this.formato.consultarFormatoA(id);
        const dto = this.fMapper.entityToDTO(formatoA);
        console.log(dto.no_revision);
        if(dto.no_revision >= 2) return false;
        const res = await this.reporte.recuperarReporte(id, prc);
        const filePath = path.join('pdf',`${res.tipo}`,`${ res.proceso.id}_${res.formato.revision}.pdf`);
        createPDFFA(filePath, res);
        if(await this.formato.existeRuta(id))
        {
            await this.formato.actualizarRuta(id,filePath);
        }else{
            await this.formato.crearRuta(id,filePath);
        }
        return await this.accesoPersistencia.enviarFormatoA(id);
    }
    public async crearProceso(proceso: ProcesoDTO): Promise<ProcesoDTO> {
        let res = new ProcesoDTO(0,0,0,0,0,"",0,0,0,"","",[]);
        if(proceso.estudiantes.length == 0) return res;
        if(this.verificarInvestigacion(proceso) || this.verificarPractica(proceso))
        {
            let entity = this.mapper.dtoToEntity(proceso);
            try{
               entity = await this.accesoPersistencia.crearProceso(entity);
               res = this.mapper.entityToDTO(entity);
            }catch(error)
            {
                console.log("error crear formato")
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
    public async consultarProcesos(usr:number): Promise<ProcesoListDTO[]> {
       const res = await this.accesoPersistencia.consultarProcesos(usr);
        return this.mapper.listEntityToDTO(res);
    }
    private verificarPractica(proceso:ProcesoDTO):boolean
    {
        return (proceso.tipo == "Práctica profesional" && proceso.estudiantes.length == 1 && (proceso.ase != null && proceso.ase != ''));
    }
    private verificarInvestigacion(proceso:ProcesoDTO)
    {
        return (proceso.tipo == "Trabajo de investigación" && proceso.estudiantes.length <=2 && proceso.ase == '');
    }
    async listFormB(): Promise<ProcesoListDTO[]> {
        const res = await this.accesoPersistencia.listFormB();
        return this.mapper.listEntityToDTO(res);
    }

}
const gestionProcesosImpl = new GestionarProcesoDirector(datos, reporteA);
export default gestionProcesosImpl;