import {Request, Response} from 'express';
import IGestionarProcesoDirector from '../services/services/IGestionarProcesoDirector';
import ProcesoDTO from '../services/DTO/ProcesoDTO';
import ProcesoListDTO from '../services/DTO/ProcesoListDTO';
import gestionProcesosImpl from '../services/services/GestionarProcesoDirectorImpl';
class ProcesoController{
    private procesoService:IGestionarProcesoDirector;
    public constructor (objImpl:IGestionarProcesoDirector){
        this.procesoService = objImpl;
    }
    public create = async (req:Request, res:Response)=>
    {
        const proceso:ProcesoDTO = req.body;
        const result = await this.procesoService.crearProceso(proceso);
        if(result.id != 0)
        {
            res.status(201).json(result);
        }else{
            res.status(400).json(result);
        }
    }
    public update =  async (req:Request, res:Response)=>
    {
        
    }
    public delete = async (req:Request, res:Response)=>
    {
        
    }
    
    public listProcess = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        console.log(id)
        const result = await this.procesoService.consultarProceso(parseFloat(id));
        console.log(result.id);
        if(result.id == parseFloat(id))
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public listProcesses = async (req:Request, res:Response) =>
    {
        //const {id} =  req.params
        //console.log(id)
        //falta id
        const result = await this.procesoService.consultarProcesos();
        if(result.length >0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
}
const procesoController = new ProcesoController(gestionProcesosImpl);
export default procesoController;