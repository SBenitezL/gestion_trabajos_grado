import CoordinacionRepository from "../../repositories/CoordinacionRepository";
import GestionConsejoImpl from "./GestionConsejoImpl";
import IGestionCoordinacion from "./IGestionCoordinacion";

export default class GestionCoordinacionImpl extends GestionConsejoImpl implements IGestionCoordinacion
{
    private dbCoordinacion:CoordinacionRepository;
    constructor(){
        super();
        this.dbCoordinacion = new CoordinacionRepository();
    }
    async rechazarFormatoA(usrId: number, prc: number): Promise<boolean|null> {
        if( !await this.verificarUsuario(usrId)) return null;
        return await this.dbCoordinacion.rechazarFormtoA(prc,-1) > 0;
    }
    async aprobarFormatoACorrecciones(usrId: number, prc: number): Promise<boolean|null> {
        if(!await this.verificarUsuario(usrId)) return null;

        return await this.dbCoordinacion.rechazarFormtoA(prc,-2) > 0;
    }
    private async verificarUsuario(usr:number):Promise<boolean>
    {
        return await this.dbCoordinacion.verificarUsuario(usr) > 0;
    }
    
}