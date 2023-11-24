import DatosReporteA from "../../../services/DTO/Report/DatosReporteA";
import EstudianteReporte from "../../../services/DTO/Report/EstudianteReporte";
import FormatoAReporte from "../../../services/DTO/Report/FormatoAReporte";
import ProcesoReporte from "../../../services/DTO/Report/ProcesoReporte";
import IEstudianteReporte from "../gateway/IEstudianteReporte";
import IFormatoAReporte from "../gateway/IFormatoAReporte";
import IProcesoReporte from "../gateway/IProcesoReporte";
import IReporteA from "../gateway/IReporteA";
import db from "../../../database/Database";

class ReporteARepository 
implements IReporteA, IEstudianteReporte, IFormatoAReporte, IProcesoReporte
{
    constructor()
    {
    }
    async recuperarReporte(id: number, prc:number): Promise<DatosReporteA> {
        const estudiantes = await this.getEstudiantes(prc);
        const formato = await this.getFormatoA(id);
        const proceso = await this.getProceso(prc);
        let tipo;
        if(proceso.tipo == "TRABAJO DE INVESTIGACIÓN")
        {
            tipo = "TI-A";
        }else{
            tipo = "PP-A";
        }
        return new DatosReporteA(tipo,proceso,estudiantes,formato)
    }
    public async getEstudiantes(id: number): Promise<EstudianteReporte[]> {
        const query = "call reporteEstudiantes(?)";
        const res:EstudianteReporte[] = [];
        try{
            const [result]:EstudianteReporte[]|any = await db.query(query,[id]);
            result[0].forEach((row:EstudianteReporte)=>{
                res.push(new EstudianteReporte(row.nombre,row.codigo));
            })
        }catch(error)
        {        
        }
        return res;
    }
    async getFormatoA(id: number): Promise<FormatoAReporte> {
        const query = "call reporteFormatoA(?)";
        let res:FormatoAReporte = new FormatoAReporte('','','','','','','',0);
        try{
            const [result]:FormatoAReporte|any = await db.query(query,[id]);
            const fa:FormatoAReporte = result[0][0];
            res = new FormatoAReporte(fa.objetivos,
                fa.condEntrega,fa.realizacion,
                 fa.recursos, fa.financiacion, fa.aportes, fa.recibido, fa.revision);
        }catch(error)
        {        
        }
        return res;
    }
    async getProceso(id: number): Promise<ProcesoReporte> {
        const query = "call reporteProceso(?)";
        let res:ProcesoReporte = new ProcesoReporte('','','','', 0);
        try{
            const [result]:ProcesoReporte|any = await db.query(query,[id]);
            const prc:ProcesoReporte = result[0][0];
            res = new ProcesoReporte(prc.titulo,prc.tipo,prc.asesor, prc.director, prc.id);
        }catch(error)
        {        
        }
        return res;
    }

}
//TODO:Eliminar
const reporte = new ReporteARepository();
export default reporte;