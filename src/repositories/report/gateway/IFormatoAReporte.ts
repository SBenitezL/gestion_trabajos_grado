import FormatoAReporte from "../../../services/DTO/Report/FormatoAReporte";

export default interface IFormatoAReporte
{
    getFormatoA(id:number):Promise<FormatoAReporte>;
}