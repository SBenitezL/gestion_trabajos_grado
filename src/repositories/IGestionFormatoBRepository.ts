import FormatoBEntity from "../models/FormatoBEntity";
export default interface IGestionFormatoBRepository
{
    crearFormatoC(id:number,user:number,formatoB:FormatoBEntity):Promise<FormatoBEntity>;
   
    actualizarFormatoC(id:number, formatoB:FormatoBEntity):Promise<FormatoBEntity>;
   
    eliminarFormatoC(id:number):Promise<boolean>;
    
    consultarFormatoC(prcId:number):Promise<FormatoBEntity>;
   
    descargarFormatoC(id:number):Promise<string | null>
}