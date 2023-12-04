import FormatoBEntity from "../models/FormatoBEntity";
import IGestionFormatoBRepository from "./IGestionFormatoBRepository";
import db from "../database/Database";

export default class GestionFormatoBRepositoryImpl implements IGestionFormatoBRepository{
    crearFormatoB(id: number, formatoB: FormatoBEntity): Promise<FormatoBEntity> {
        throw new Error("Method not implemented.");
    }
    actualizatFormatoB(id: number, formatoB: FormatoBEntity): Promise<FormatoBEntity> {
        throw new Error("Method not implemented.");
    }
    eliminarFormatoB(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    consultarFormatoB(prcId: number): Promise<FormatoBEntity> {
        throw new Error("Method not implemented.");
    }
    descargarFormatoB(id: number): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
}