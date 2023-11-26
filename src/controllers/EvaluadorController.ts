import {Request, Response} from 'express'

import EvaluadorDTO from "../services/DTO/EvaluadorDTO";
import EvaluadorImpl from "../services/services/EvaluadorImpl";
import IEvaluadores from "../services/services/IEvaluadores";
import IAsignarEvaluadores from '../services/services/IAsignarEvaluadores';

class EvaluadorController{
    private servicios:IEvaluadores & IAsignarEvaluadores
    constructor(){
        this.servicios = new EvaluadorImpl();
    }
    public findAll =  async (req:Request, res:Response)=>{
        const result = await this.servicios.consultarEvaluadores();
        if(result.length > 0)
        {
            res.status(200).json(result);
        }else{
            res.status(404).json({error:"No hay evaluadores registrados"});
        }
    }
    public assign = async (req:Request, res:Response)=>{
        const id = parseFloat(req.query.id as string);
        const evaluadores = req.body as EvaluadorDTO[];
        const result =  await this.servicios.asignarEvaluador(id, evaluadores)
        console.log(result);
        if(result != null) res.status(201).json(result);
        else res.status(406).json({error: "Fallo"});
    }
}
const evaluadorController = new EvaluadorController();
export default evaluadorController;