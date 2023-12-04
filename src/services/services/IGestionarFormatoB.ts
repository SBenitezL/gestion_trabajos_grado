import FormatoBDTO from "../DTO/FormatoBDTO";
export default interface IGestionarFormatoB
{
    crearFormatoB(id:number,formatoB:FormatoBDTO, usr:number):Promise<FormatoBDTO|null>;
    /**
     * @route PUT api/formatos/b/:id
     * @param id 
     * @param formatoA 
     */
    actualizatFormatoB(id:number, formatoB:FormatoBDTO):Promise<FormatoBDTO>;
    /**
     * @route DELETE api/formatos/b/:id
     * @param id 
     */
    eliminarFormatoB(id:number):Promise<boolean>;
    /**
     * @route GET api/formatos/b/:prcId
     * @param prcId 
     */
    consultarFormatoB(prcId:number):Promise<FormatoBDTO>;
    /**
     * 
     * @param id 
     * 
     */
    descargarFormatoB(id:number):Promise<string | null>
}