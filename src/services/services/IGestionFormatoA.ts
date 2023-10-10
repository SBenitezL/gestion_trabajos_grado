import FormatoADTO from "../DTO/FormatoADTO"
export default interface IGestionarFormatoA
{
    /**
     * @route POST api/formatosa
     * @param formatoA 
     */
    crearFormatoA(formatoA:FormatoADTO):Promise<FormatoADTO>;
    /**
     * @route PUT api/formatosa/:id
     * @param id 
     * @param formatoA 
     */
    actualizatFormatoA(id:number, formatoA:FormatoADTO):Promise<FormatoADTO>;
    /**
     * @route DELETE api/formatosa/:id
     * @param id 
     */
    eliminarFormatoA(id:number):Promise<boolean>;
    /**
     * @route GET api/formatosa/prcId
     * @param prcId 
     */
    consultarFormatoA(prcId:number):Promise<FormatoADTO>;
}