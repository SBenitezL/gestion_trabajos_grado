import IGestionConsejo from "./IGestionConsejo";

export default interface IGestionCoordinacion extends IGestionConsejo{
    
    /**
     * @route PATCH /api/coordinacion/formatos/a/:prc/:usr
     * @param usrId 
     * @param prc 
     */
    rechazarFormatoA(usrId:number, prc:number):Promise<boolean|null>
}