import GestionFormatoARepository from "../../repositories/GestionFormatoARepository";
import FormatoADTO from "../DTO/FormatoADTO";
import IGestionarFormatoA from "./IGestionFormatoA";
import FormatoAMapper from "../Maping/FormatoAMapper";
import FormatoAEntity from "../../models/FormatoAEntity";
class GestionFormatoAImpl implements IGestionarFormatoA{
    private accesoPersistencia:GestionFormatoARepository;
    private mapper:FormatoAMapper;
    public constructor(){
        this.accesoPersistencia = new GestionFormatoARepository();
        this.mapper = new FormatoAMapper();
    }

    async crearFormatoA(formatoA: FormatoADTO): Promise<FormatoADTO> {
        const FormatoADTO =this.mapper.jsonToDTO(formatoA);
        const FormatoAEntity: FormatoAEntity[] =this.mapper.dtoToEntity(FormatoADTO);
        const res = await this.accesoPersistencia.crearFormatoA(FormatoAEntity);
        return this.mapper.entityToDTO(res);
    }
    actualizatFormatoA(id: number, formatoA: FormatoADTO): Promise<FormatoADTO> {
        throw new Error("Method not implemented.");
    }
    async eliminarFormatoA(id: number): Promise<boolean> {
        return await this.accesoPersistencia.EliminarFormatoA(id);
    }
    consultarFormatoA(prcId: number): Promise<FormatoADTO> {
        throw new Error("Method not implemented.");
    }
    
}
const gestionFormatoAImpl = new GestionFormatoAImpl();
export default gestionFormatoAImpl;