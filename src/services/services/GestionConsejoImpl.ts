import ConsejoRepository from "../../repositories/ConsejoRepository";
import RevisionADTO from "../DTO/RevisionADTO";
import RevisionAMapper from "../Maping/RevisionAMapper";
import IGestionConsejo from "./IGestionConsejo";

export default class GestionConsejoImpl implements IGestionConsejo {
    private revMapper:RevisionAMapper;
    private persistencia:ConsejoRepository
    constructor(){
        this.revMapper = new RevisionAMapper();
        this.persistencia = new ConsejoRepository();
    }
    async listarFormatosA(usuarioId: number): Promise<RevisionADTO[] | null> {
        if(! await this.comprobarUsuario(usuarioId)) return null;
        const entity = await this.persistencia.listarFormatosA();
        return this.revMapper.listEntityToDTO(entity)
    }
    private async comprobarUsuario(usuarioId:number):Promise<boolean>{
        return await this.persistencia.verificarUsuario(usuarioId) > 0;
    }
}