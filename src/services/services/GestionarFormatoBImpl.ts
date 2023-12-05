import FormatoBDTO from "../DTO/FormatoBDTO";
import IGestionFormatoBRepository from "../../repositories/IGestionFormatoBRepository";
import GestionFormatoBRepositoryImpl from "../../repositories/GestionFormatoBRepository";
import IGestionarFormatoB from "./IGestionarFormatoB";
import FormatoBMapper from "../Maping/FormatoBMapper";

export  class GestionarFormatoBImpl implements IGestionarFormatoB{

    private mapper:FormatoBMapper;
    private datos:IGestionFormatoBRepository;
    constructor()
    {
        this.mapper = new FormatoBMapper();
        this.datos = new GestionFormatoBRepositoryImpl();
    }
    async crearFormatoB(id: number, formatoB: FormatoBDTO, usr:number): Promise<FormatoBDTO|null> {
        if(!this.verificarUsuario(usr))return null;
        if(!this.datos.verificarFormato(usr,id)){
            formatoB.id = -2
            return formatoB;
        }
        const petDTO = this.mapper.dtoToEntity(formatoB);
        const resEntity = await this.datos.crearFormatoB(id, petDTO,usr);
        return this.mapper.entityToDTO(resEntity);
    }
    async actualizatFormatoB(id: number, formatoB: FormatoBDTO,usr:number): Promise<FormatoBDTO|null> {
        if(!this.verificarUsuario(usr))return null;
        if(!this.datos.verificarFormato(usr,id)){
            formatoB.id = -2
            return formatoB;
        }
        const idB = await this.datos.recuperarIdB(id,usr);
        if(idB === undefined){
            formatoB.id = -1
            return formatoB;
        }
        const petEntity = this.mapper.dtoToEntity(formatoB);
        const entity = await this.datos.actualizarFormatoB(idB,petEntity);
        return this.mapper.entityToDTO(entity);
    }
    async eliminarFormatoB(id: number, usr:number): Promise<boolean|null> {
        if(await this.datos.verificarUsuario(usr)) return null;
        const bId = await this.datos.recuperarIdB(id, usr);
        if(bId === undefined) return false;
        const res = await this.datos.eliminarFormatoB(bId);
        return res;

    }
    async consultarFormatoB(prcId: number, usr:number): Promise<FormatoBDTO|null> {
        if(!this.verificarUsuario(usr))return null;
        const bId = await this.datos.recuperarIdB(prcId, usr);
        if(bId === undefined) return new FormatoBDTO(-2,1,1,1,1,1,1,1,1,new Date(),"",1,new Date());;
        const res = await this.datos.consultarFormatoB(bId);
        return this.mapper.entityToDTO(res)
    }
    async descargarFormatoB(id: number): Promise<string | null> {
        return await this.datos.descargarFormatoB(id);
    }
    private async verificarUsuario(usr:number):Promise<boolean>
    {
        return false;
    }
    
    
}
const gestionFormatoBImpl = new GestionarFormatoBImpl();
export default gestionFormatoBImpl;