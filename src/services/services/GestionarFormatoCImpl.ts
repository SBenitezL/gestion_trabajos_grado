import FormatoCDTO from "../DTO/FormatoCDTO";
import IGestionFormatoCRepository from "../../repositories/IGestionFormatoCRepository";
import IGestionarFormatoC from "./IGestionarFormatoC";
import FormatoCMapper from "../Maping/FormatoCMapper";
import GestionFormatoCRepositoryImpl from "../../repositories/GestionFormatoCRepository";
export class GestionarFormatoCImpl implements IGestionarFormatoC{
    private mapper:FormatoCMapper;
    private datos:IGestionFormatoCRepository;
    constructor()
    {
        this.mapper = new FormatoCMapper();
        this.datos = new GestionFormatoCRepositoryImpl();
    }
    async crearFormatoC(id: number, formatoC: FormatoCDTO, usr: number): Promise<FormatoCDTO | null> {
        if(!this.verificarUsuario(usr))return null;
        if(!this.datos.verificarFormato(usr,id)){
            formatoC.id = -2
            return formatoC;
        }
        const cDTO = this.mapper.dtoToEntity(formatoC);
        const resEntity = await this.datos.crearFormatoC(id, cDTO,usr);
        return this.mapper.entityToDTO(resEntity);
    }
    async consultarFormatoC(prcId: number,usr:number): Promise<FormatoCDTO |null> {
        if(!this.verificarUsuario(usr))return null;
        const cId = await this.datos.recuperarIdC(prcId, usr);
        if(cId === undefined) return new FormatoCDTO(-2,"",1,1,1,new Date(),"",1,new Date());;
        const res = await this.datos.consultarFormatoC(cId);
        return this.mapper.entityToDTO(res);
    }
    async descargarFormatoC(id: number): Promise<string | null> {
        return await this.datos.descargarFormatoC(id);
    }
    async enviarFormC(id: number,usr:number): Promise<boolean | null> {
        if(!this.verificarUsuario(usr))return null;
        const cId = await this.datos.recuperarIdC(id,usr);
        if(cId === undefined) return false;
        const res = await this.datos.enviarFormC(cId);
        return res;
    }
    private async verificarUsuario(usr:number):Promise<boolean>
    {
        return false;
    }

}
const gestionFormatoCImpl = new GestionarFormatoCImpl();
export default gestionFormatoCImpl;