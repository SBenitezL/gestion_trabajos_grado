import revisionAImpl from "../services/services/RevisionAImpl"
import IRevisionA from "../services/services/IRevisionA"
import {Request, Response} from "express"
class RevisionAController{
    public constructor(private revisionAServices:IRevisionA)
    {
    }
    public list = async(req:Request, res:Response)=>{
        try
        {
            const result = await this.revisionAServices.listarProcesos(parseInt(req.params.cod));
            if(result.length > 0)
            {
                res.status(200).json(result);
            }else{
                res.status(400).json({error:"No se pudo listar"});
            }
        }catch(error)
        {
            res.status(500).json({error: "Error en el servidor"});
        }
    }

    public changeState = async(req:Request, res:Response)=>{
        try
        {
            const result = await this.revisionAServices.cambiarEstadoFormatoA(parseInt(req.params.cod));
            if(result.length > 0)
            {
                res.status(200).json(result);
            }else{
                res.status(400).json({error:"No se pudo cambiar el estado del formato A"});
            }
        }catch(error)
        {
            res.status(500).json({error: "Error en el servidor"});
        }
    }
}
const revisionAController = new RevisionAController(revisionAImpl);
export default revisionAController;