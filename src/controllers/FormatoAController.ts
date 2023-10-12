import {Request, Response} from 'express';
import IGestionarFormatoA from '../services/services/IGestionFormatoA';
import FormatoADTO from '../services/DTO/FormatoADTO';
import gestionFormatoAImpl from '../services/services/GestionFormatoAImpl';
class FormatoAController{
    public formatoAService:IGestionarFormatoA;
    public constructor(objImpl:IGestionarFormatoA){
        this.formatoAService =objImpl;
    }
    public create = async (req:Request, res:Response)=>
    {
        const result = await this.formatoAService.crearFormatoA(req.body);
        if(result.id != 0)
        {
            res.status(201).json(result);
        }
        else{
            res.status(401).json(result);
        }
       
    }
    public update =  async (req:Request, res:Response)=>
    {
      
    }
    public delete = async (req:Request, res:Response)=>
    {
        const {id} = req.params
        const result  =await this.formatoAService.eliminarFormatoA(parseInt(id));
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public listById = async (req:Request, res:Response)=>
    {
    }    
    
}
const formatoAController = new FormatoAController(gestionFormatoAImpl);
export default formatoAController;