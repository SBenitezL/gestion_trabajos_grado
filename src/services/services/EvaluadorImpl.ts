import EvaluadorRepositoryImpl from "../../repositories/EvaluadorRepositoryImpl";
import IEvaluadorRepository from "../../repositories/IEvaluadorRepositoyry";
import EvaluadorDTO from "../DTO/EvaluadorDTO";
import EvaluadorMapper from "../Maping/EvaluadorMapper";
import IEvaluadores from "./IEvaluadores";

export default class EvaluadorImpl implements IEvaluadores{
    private mapper:EvaluadorMapper;
    private datos:IEvaluadorRepository
    constructor()
    {
        this.mapper = new EvaluadorMapper();
        this.datos = new EvaluadorRepositoryImpl();
    }
    async consultarEvaluadores(): Promise<EvaluadorDTO[]> {
        return this.mapper.entitiesToDTOS(await this.datos.findAll())
    }
}