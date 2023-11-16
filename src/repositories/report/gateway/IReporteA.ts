import DatosReporteA from "../../../services/DTO/Report/DatosReporteA";
import IEstudianteReporte from "./IEstudianteReporte";
import IFormatoAReporte from "./IFormatoAReporte";
import IProcesoReporte from "./IProcesoReporte";

export default interface IReporteA 
{
    recuperarReporte(id:number, prc:number):Promise<DatosReporteA>;
}