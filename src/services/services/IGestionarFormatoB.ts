import FormatoBDTO from "../DTO/FormatoBDTO";
export default interface IGestionarFormatoB
{
    crearFormatoB(id:number,formatoB:FormatoBDTO):Promise<FormatoBDTO>;
    /**
     * @route PUT api/formatosa/:id
     * @param id 
     * @param formatoA 
     */
    actualizatFormatoB(id:number, formatoB:FormatoBDTO):Promise<FormatoBDTO>;
    /**
     * @route DELETE api/formatosa/:id
     * @param id 
     */
    eliminarFormatoB(id:number):Promise<boolean>;
    /**
     * @route GET api/formatoA/prcId
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