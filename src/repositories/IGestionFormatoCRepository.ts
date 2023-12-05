import FormatoCEntity from "../models/FormatoCEntity";
export default interface IGestionFormatoBRepository
{
    crearFormatoB(id:number,formatoB:FormatoCEntity):Promise<FormatoCEntity>;
   
    actualizatFormatoB(id:number, formatoB:FormatoCEntity):Promise<FormatoCEntity>;
   
    eliminarFormatoB(id:number):Promise<boolean>;
    
    consultarFormatoB(prcId:number):Promise<FormatoCEntity>;
   
    descargarFormatoB(id:number):Promise<string | null>
}