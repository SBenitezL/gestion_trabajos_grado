import {Request, Response} from 'express'

import EvaluadorDTO from "../services/DTO/EvaluadorDTO";
import EvaluadorImpl from "../services/services/EvaluadorImpl";
import IEvaluadores from "../services/services/IEvaluadores";

class EvaluadorController{
    private servicios:IEvaluadores
    constructor(){
        this.servicios = new EvaluadorImpl();
    }
    public findAll =  async (req:Request, res:Response)=>{
        const result = await this.servicios.consultarEvaluadores();
        if(result.length > 0)
        {
            res.json(result).status(200)
        }else{
            res.json({error:"No hay evaluadores registrados"}).status(404);
        }
    }
}
const evaluadorController = new EvaluadorController();
export default evaluadorController;