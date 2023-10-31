import {Request, Response} from 'express';
import IGestionEstudiantes from '../services/services/IGestionEstudiantes';
import gestionEstudiantesImpl from '../services/services/GestionEstudiantesImpl';

class EstudianteController
{
    constructor(public procesoService:IGestionEstudiantes)
    {
    }
    public list = async (req:Request,res:Response)=>{
        const result = await this.procesoService.consultarEstudiantes();
        if(result.length>0)
            res.status(200).json(result);
        else    
            res.status(400).json(result);
    }
    public getOne = async (req:Request, res:Response)=>
    {
        const cod = parseInt(req.params.cod)
        const result = await this.procesoService.consultarEstudiante(cod);
        if(result.codigo == cod)
            res.status(200).json(result);
        else    
            res.status(400).json(result);
    }
}
const estudianteController = new EstudianteController(gestionEstudiantesImpl);
export default estudianteController;