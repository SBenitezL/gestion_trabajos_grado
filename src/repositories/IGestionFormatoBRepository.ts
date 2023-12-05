import FormatoBEntity from "../models/FormatoBEntity";
export default interface IGestionFormatoBRepository
{
    crearFormatoB(id:number,formatoB:FormatoBEntity, usr:number):Promise<FormatoBEntity>;
   
    actualizarFormatoB(id:number, formatoB:FormatoBEntity):Promise<FormatoBEntity>;
   
    eliminarFormatoB(id:number):Promise<boolean>;
    
    consultarFormatoB(prcId:number):Promise<FormatoBEntity>;
   
    descargarFormatoB(id:number):Promise<string | null>;

    verificarUsuario(usr:number):Promise<boolean>

    verificarFormato(usr:number, id:number):Promise<boolean>;
    
    recuperarIdB(id:number, usr:number):Promise<number|undefined>;

    enviarFormB(id:number, usr:number):Promise<boolean>;
}