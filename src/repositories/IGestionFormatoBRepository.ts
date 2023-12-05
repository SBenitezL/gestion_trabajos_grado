import FormatoBEntity from "../models/FormatoBEntity";
export default interface IGestionFormatoBRepository
{
    crearFormatoB(id:number,formatoB:FormatoBEntity):Promise<FormatoBEntity>;
   
    actualizatFormatoB(id:number, formatoB:FormatoBEntity):Promise<FormatoBEntity>;
   
    eliminarFormatoB(id:number):Promise<boolean>;
    
    consultarFormatoB(prcId:number):Promise<FormatoBEntity>;
   
    descargarFormatoB(id:number):Promise<string | null>
}