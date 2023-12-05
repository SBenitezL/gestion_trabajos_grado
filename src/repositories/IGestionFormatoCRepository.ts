import FormatoCEntity from "../models/FormatoCEntity";
export default interface IGestionFormatoCRepository
{
    crearFormatoC(id:number,formatoC:FormatoCEntity, usr:number):Promise<FormatoCEntity>;
    
    consultarFormatoC(prcId:number):Promise<FormatoCEntity>;
   
    descargarFormatoC(id:number):Promise<string | null>;

    verificarUsuario(usr:number):Promise<boolean>

    verificarFormato(usr:number, id:number):Promise<boolean>;

    recuperarIdC(id:number, usr:number):Promise<number|undefined>;

    enviarFormC(id:number):Promise<boolean>;

    existeRuta(id:number):Promise<boolean>;
    crearRuta(id:number, ruta:string):Promise<boolean>;
    actualizarRuta(id:number, ruta:string):Promise<void>;
}