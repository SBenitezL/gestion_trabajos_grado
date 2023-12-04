import {Request, Response} from 'express';
import IGestionarFormatoB from '../services/services/IGestionarFormatoB';
import FormatoBDTO from '../services/DTO/FormatoBDTO';
import gestionFormatoBImpl from '../services/services/GestionarFormatoBImpl';

class FormatoBController{
    public formatoBService:IGestionarFormatoB;
    public constructor(objImpl:IGestionarFormatoB){
        this.formatoBService =objImpl;
    }
    public create = async (req:Request, res:Response)=>
    {
        const id = parseFloat(req.query.id as string);
        const usr = parseInt(req.query.usr as string);
        //console.log(req.body);
        const result = await this.formatoBService.crearFormatoB(id, req.body, usr);
        //console.log(result.objetivos);
        if(result)
        {
            if(result.id != 0)
            {
                res.status(201).json(result);
            }
            else{
                res.status(400).json(result);
            }
        }else res.status(401).json({error:"Usuario no autorizado."})
    }
    public update =  async (req:Request, res:Response)=>
    {
        const {id} = req.params;
        const form = req.body;
        const result = await this.formatoBService.actualizatFormatoB(parseInt(id), form);
        if(result.id == form._id)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
      
    }
    public delete = async (req:Request, res:Response)=>
    {
        const {id} = req.params
        const result  =await this.formatoBService.eliminarFormatoB(parseInt(id));
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public listById = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.formatoBService.consultarFormatoB(parseFloat(id));
        if(result.id != 0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(400).json(result);
        }
    }   
    public download = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.formatoBService.descargarFormatoB(parseInt(id));
        
        if( result )
        {
            console.log("controller",result);
            const ruta=result;
            res.download(ruta, (error) => {
                if (error) {
                    console.error('Error al descargar el archivo:', error);
                    res.status(500).json({ error: 'Error al descargar el archivo' });
                }
            });
        }
        else{
            res.status(400).json(result);
        }
    }    
    
}
const formatoBController = new FormatoBController(gestionFormatoBImpl);
export default formatoBController;