import GestionConsejoImpl from "./GestionConsejoImpl";
import IGestionCoordinacion from "./IGestionCoordinacion";

export default class GestionCoordinacionImpl extends GestionConsejoImpl implements IGestionCoordinacion
{
    rechazarFormatoA(usrId: number, prc: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}