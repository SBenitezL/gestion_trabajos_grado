import FormatoCDTO from "../DTO/FormatoCDTO";
export default interface IGestionarFormatoC
{
    crearFormatoC(id:number,formatoC:FormatoCDTO, usr:number):Promise<FormatoCDTO | null>;
    
    consultarFormatoC(prcId:number,usr:number):Promise<FormatoCDTO | null>;
   
    descargarFormatoC(id:number):Promise<string | null>;

    enviarFormC(id:number,usr:number):Promise<boolean | null>;
}