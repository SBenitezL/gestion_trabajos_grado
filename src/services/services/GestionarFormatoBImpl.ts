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
    crearFormatoB(id: number, formatoB: FormatoBDTO): Promise<FormatoBDTO> {
        throw new Error("Method not implemented.");
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
    descargarFormatoB(id: number): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
}
const gestionFormatoBImpl = new GestionarFormatoBImpl();
export default gestionFormatoBImpl;