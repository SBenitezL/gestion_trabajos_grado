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
        const petDTO = this.mapper.dtoToEntity(formatoB);
        this.datos.crearFormatoB(id, petDTO);
        const resEntity = await this.datos.crearFormatoB(id, petDTO);
        return this.mapper.entityToDTO(resEntity);
    }
    actualizatFormatoB(id: number, formatoB: FormatoBDTO): Promise<FormatoBDTO> {
        throw new Error("Method not implemented.");
    }
    eliminarFormatoB(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    consultarFormatoB(prcId: number): Promise<FormatoBDTO> {
        throw new Error("Method not implemented.");
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