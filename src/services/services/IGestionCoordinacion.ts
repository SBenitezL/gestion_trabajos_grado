import IGestionConsejo from "./IGestionConsejo";

export default interface IGestionCoordinacion extends IGestionConsejo{
    
    /**
     * @route PATCH /api/coordinacion/formatos/a/:prc/:usr
     * @param usrId 
     * @param prc 
     */
    rechazarFormatoA(usrId:number, prc:number):Promise<boolean|null>
    /**
     * @route PATCH /api/coordinacion/formatos/a/correcciones/:prc/:usr
     * @param usrId 
     * @param prc 
     */
    aprobarFormatoACorrecciones(usrId: number, prc: number): Promise<boolean|null>
}