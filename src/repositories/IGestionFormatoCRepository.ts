import FormatoCEntity from "../models/FormatoCEntity";
export default interface IGestionFormatoBRepository
{
    crearFormatoC(id:number,formatoC:FormatoCEntity):Promise<FormatoCEntity>;
   
    actualizatFormatoC(id:number, formatoC:FormatoCEntity):Promise<FormatoCEntity>;
   
    eliminarFormatoC(id:number):Promise<boolean>;
    
    consultarFormatoC(prcId:number):Promise<FormatoCEntity>;
   
    descargarFormatoC(id:number):Promise<string | null>
}