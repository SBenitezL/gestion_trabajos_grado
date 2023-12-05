import {Request, Response} from 'express';
import IGestionarAnteproyecto from '../services/services/IGestionarAnteproyecto';
import gestionAnteproyectoImpl from '../services/services/GestionAnteproyectoImpl';
//todo
class AnteproyectoController{
    public anteproyectoService:IGestionarAnteproyecto;
    public constructor(objImpl:IGestionarAnteproyecto){
        this.anteproyectoService =objImpl;
    }
    
    public download = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.anteproyectoService.descargarAnteproyecto(parseInt(id));
        
        if( result )
        {
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
    public uploadA = async (req:Request, res:Response)=>
    {
        console.log("Ingreso");
        const archivo=req.file;
        if (!archivo) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const {id}=req.params;
        const ruta_arch=archivo?.path;
        const nombre_arch=archivo?.filename;
        const result = await this.anteproyectoService.cargarAnteproyecto(parseFloat(id),ruta_arch,nombre_arch); 

        if( result )
        {
            res.status(201).json(result);
        }
        else{
            res.status(400).json(result);
        }
    }    
    
}
const anteproyectoController = new AnteproyectoController(gestionAnteproyectoImpl);
export default anteproyectoController;