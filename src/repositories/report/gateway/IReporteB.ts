import DatosReporteB from "../../../services/DTO/Report/DatosReporteB";

export default interface IReporteB {
    recuperarReporteB(id:number, prc:number, usr:number):Promise<DatosReporteB>;
}