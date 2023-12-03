import GestionConsejoImpl from "./GestionConsejoImpl";
import IGestionCoordinacion from "./IGestionCoordinacion";

export default class GestionCoordinacionImpl extends GestionConsejoImpl implements IGestionCoordinacion
{
    
    async rechazarFormatoA(usrId: number, prc: number): Promise<boolean|null> {
        if(await this.verificarUsuario(usrId)) return null;
        
        throw new Error("Method not implemented.");
    }
    private async verificarUsuario(usr:number):Promise<boolean>
    {
        return false;
    }
    
}