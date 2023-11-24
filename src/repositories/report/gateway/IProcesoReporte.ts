import ProcesoReporte from "../../../services/DTO/Report/ProcesoReporte";

export default interface IProcesoReporte
{
    getProceso(id:number):Promise<ProcesoReporte>;
}