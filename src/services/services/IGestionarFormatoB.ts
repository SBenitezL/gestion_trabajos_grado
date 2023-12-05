import FormatoBDTO from "../DTO/FormatoBDTO";
export default interface 



IGestionarFormatoB
{
    crearFormatoB(id:number,formatoB:FormatoBDTO, usr:number):Promise<FormatoBDTO|null>;
    /**
     * @route PUT api/formatos/b/?id=&usr=
     * @param id 
     * @param formatoA 
     */
    actualizatFormatoB(id:number, formatoB:FormatoBDTO, usr:number):Promise<FormatoBDTO|null>;
    /**
     * @route DELETE api/formatos/b/?id=&usr=
     * @param id 
     */
    eliminarFormatoB(id:number, usr:number):Promise<boolean|null>;
    /**
     * @route GET api/formatos/b/?id=&usr=
     * @param prcId 
     */
    consultarFormatoB(prcId:number, usr:number):Promise<FormatoBDTO|null>;
    /**
     * 
     * @param id 
     * 
     */
    descargarFormatoB(id:number):Promise<string[] | null>;




    enviarFormB(id:number, usr:number):Promise<boolean|null>;


}