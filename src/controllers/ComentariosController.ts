import {Request, Response} from 'express';
import IComentariosFormatoA from '../services/services/IComentariosFormatoA';
import gestionComentarioImpl from '../services/services/GestionComentarioTI_AImpl';

class ComentariosController{
    public comentariosService:IComentariosFormatoA;
    public constructor(objImpl:IComentariosFormatoA){
        this.comentariosService =objImpl;
    }

    public download = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.comentariosService.descargarComentariosFormA(parseInt(id));
        
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
        const result = await this.comentariosService.cargarComentariosFormA(parseInt(id),ruta_arch,nombre_arch); 

        if( result )
        {
            res.status(201).json(result);
        }
        else{
            res.status(400).json(result);
        }
    }    
}
const comentarioController = new ComentariosController(gestionComentarioImpl);
export default comentarioController;