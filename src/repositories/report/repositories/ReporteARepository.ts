import DatosReporteA from "../../../services/DTO/Report/DatosReporteA";
import EstudianteReporte from "../../../services/DTO/Report/EstudianteReporte";
import FormatoAReporte from "../../../services/DTO/Report/FormatoAReporte";
import ProcesoReporte from "../../../services/DTO/Report/ProcesoReporte";
import IEstudianteReporte from "../gateway/IEstudianteReporte";
import IFormatoAReporte from "../gateway/IFormatoAReporte";
import IProcesoReporte from "../gateway/IProcesoReporte";
import IReporteA from "../gateway/IReporteA";
import db from "../../../database/Database";
import IReporteB from "../gateway/IReporteB";
import DatosReporteB from "../../../services/DTO/Report/DatosReporteB";
import FormatoBEntity from "../../../models/FormatoBEntity";
import FormatoCEntity from "../../../models/FormatoCEntity";
import DatosReporteC from "../../../services/DTO/Report/DatosReporteC";

class ReporteARepository 
implements IReporteA, IEstudianteReporte, IFormatoAReporte, IProcesoReporte, IReporteB
{
    constructor()
    {
    }
    async recuperarReporteB(id: number, prc: number, usr:number): Promise<DatosReporteB> {
        const estudiantes = await this.getEstudiantes(prc);
        const proceso = await this.getProceso(prc);
        let tipo;
        if(proceso.tipo == "TRABAJO DE INVESTIGACIÓN")
        {
            tipo = "TI-B";
        }else{
            tipo = "PP-B";
        }
        const formato = await this.consultarFormatoB(id);
        const evaluador = await this.consultarEvaluador(usr)
        return new DatosReporteB(tipo,proceso,estudiantes,formato, evaluador);
    }
    async recuperarReporteC(id: number, prc: number, usr:number): Promise<DatosReporteC> {
        const estudiantes = await this.getEstudiantes(prc);
        const proceso = await this.getProceso(prc);
        let tipo;
        if(proceso.tipo == "TRABAJO DE INVESTIGACIÓN")
        {
            tipo = "TI-C";
        }else{
            tipo = "PP-C";
        }
        const formato = await this.consultarFormatoC(id);
        const evaluador = await this.consultarEvaluadores(usr)
        return new DatosReporteC(tipo,proceso,estudiantes,formato, evaluador);
    }
    private async consultarFormatoB(prcId: number): Promise<FormatoBEntity> {
        const query = "select * from ti_b where b_id = ?";
        try{
            const [res]:FormatoBEntity[]|any = await db.query(query,[prcId]);
            return res[0];

        }catch{

        }
        return new FormatoBEntity(-3,1,1,1,1,1,1,1,1,new Date(),"",1,new Date());
    }
    private async consultarEvaluador(usr:number):Promise<string>{
        const query = "select usr_nombre from usuario where usr_codigo = ?";
        try{
            const [res]:string|any = await db.query(query,[usr]);
            return res[0].usr_nombre;
            
        }catch{return ""}
    }
    private async consultarEvaluadores(usr:number):Promise<string[]>{
        const query = "select DISTINCT(usr_nombre) from usuario join b_proceso on usuario.usr_codigo = b_proceso.usr_codigo where b_proceso.prc_id = ?;";
        try{
            const [res]:string|any = await db.query(query,[usr]);
            return [res[0].usr_nombre, res[1].usr_nombre];
            
        }catch{return []}
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
    async consultarFormatoC(prcId: number): Promise<FormatoCEntity> {
        const query = "select * from ti_c where c_id = ?";
        try{
            const [res]:FormatoCEntity[]|any = await db.query(query,[prcId]);
            return res[0];

        }catch{

        }
        return new FormatoCEntity(-3,"",1,1,1,new Date(),"",1,new Date());
   
    }

}
//TODO:Eliminar
const reporte = new ReporteARepository();
export default reporte;