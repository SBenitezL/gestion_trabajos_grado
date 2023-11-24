import EvaluadorRepositoryImpl from "../../repositories/EvaluadorRepositoryImpl";
import IEvaluadorRepository from "../../repositories/IEvaluadorRepositoyry";
import EvaluadorDTO from "../DTO/EvaluadorDTO";
import EvaluadorMapper from "../Maping/EvaluadorMapper";
import IAsignarEvaluadores from "./IAsignarEvaluadores";
import IEvaluadores from "./IEvaluadores";

export default class EvaluadorImpl implements IEvaluadores,IAsignarEvaluadores{
    private mapper:EvaluadorMapper;
    private datos:IEvaluadorRepository
    constructor()
    {
        this.mapper = new EvaluadorMapper();
        this.datos = new EvaluadorRepositoryImpl();
    }
    
    async asignarEvaluador(id: number, evaluadores: EvaluadorDTO[]): Promise<EvaluadorDTO[]|null> {
        if(! await this.comprobarReglas(id, evaluadores))return null;
        
        throw new Error("Method not implemented.");
    }
    eliminarEvaluador(id: number, evaluador: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    private async verificarEvaluadores(evaluadores:EvaluadorDTO[]):Promise<boolean>
    {
        if(evaluadores.length != 2) return false;
        const res = await this.datos.verificarEvaluador(evaluadores[0].codigo, evaluadores[1].codigo);
        return res.length == 2;
    }
    private async verificarAsignados(prc:number, eva:number):Promise<boolean>{
        const res = await this.datos.verificarAsignados(prc);
        return res.length + eva < 2
    }
    private async comprobarReglas(prc:number, evaluadores:EvaluadorDTO[]):Promise<boolean>
    {
        const v1 = await this.verificarEvaluadores(evaluadores);
        const v2 = await this.verificarAsignados(prc, evaluadores.length);
        return v1 && v2;
    }
    async consultarEvaluadores(): Promise<EvaluadorDTO[]> {
        return this.mapper.entitiesToDTOS(await this.datos.findAll())
    } 
}