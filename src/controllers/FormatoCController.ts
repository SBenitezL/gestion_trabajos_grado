import {Request, Response} from 'express';
import IGestionarFormatoC from '../services/services/IGestionarFormatoC';
import FormatoCDTO from '../services/DTO/FormatoCDTO';
import gestionFormatoCImpl from '../services/services/GestionarFormatoCImpl';
import FormatoCMapper from '../services/Maping/FormatoCMapper';
class FormatoCController{
    public formatoCService:IGestionarFormatoC;
    public constructor(objI:IGestionarFormatoC){
        this.formatoCService=objI;
    }
    public create = async (req:Request, res:Response)=>
    {
        const id = parseFloat(req.query.id as string);
        const usr = parseInt(req.query.usr as string);
        console.log(req.body);
        const result = await this.formatoCService.crearFormatoC(id, req.body, usr);
        //console.log(result.objetivos);
        if(result)
        {
            if(result.id > 0)
            {
                res.status(201).json(result);
            }
            else{
                if(result.id == -2) res.status(406).json({error:"El usuario ya ha subido un formato para el proceso"});
                else res.status(500).json({error:"Problema con el servidor, comuniquese con el administrador"});
            }
        }else res.status(401).json({error:"Usuario no autorizado."})
    }
   
    
    public listById = async (req:Request, res:Response)=>
    {
        const id = parseFloat(req.query.id as string);
        const usr = parseInt(req.query.usr as string);
        const result = await this.formatoCService.consultarFormatoC(id,usr);
        if(result)
        {
            if(result.id != 0)
            {
                res.status(200).json(result);
            }
            else{
                res.status(400).json(result);
            }
        }else res.status(401).json({error:"Usuario no tiene acceso a esta información."})
    }   
    public download = async (req:Request, res:Response)=>
    {
        const num = parseInt(req.query.num as string);
        const {id} =  req.params
        const result = await this.formatoCService.descargarFormatoC(parseInt(id));
        
        if( result )
        {
            const {id} =  req.params
            const result = await this.formatoCService.descargarFormatoC(parseInt(id));
            
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
        else{
            res.status(400).json(result);
        }
    }   
    //query param
    //id proceso y usr 
    public sendFormC =  async (req:Request, res:Response)=>
    {
        const id = parseFloat(req.query.id as string);
        const usr = parseInt(req.query.usr as string);
        const result = await this.formatoCService.enviarFormC(id, usr);
        if(result === null)
        {
            if(result)
            {
                res.status(200).json(result);
            }else{
                res.status(400).json(result);
            }
        }else res.status(401).json({error:"Usuario no autorizado"})
    }
}
const formatoCController = new FormatoCController(gestionFormatoCImpl);
export default formatoCController;