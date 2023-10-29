import {Router} from 'express';
import procesoController from '../controllers/ProcesoController';
class ProcesoRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
        console.log("h");
    }
    private config():void
    {
        this.router.post('',procesoController.create);
        this.router.put('/:id', procesoController.update);
        this.router.delete('/:id', procesoController.delete);
        this.router.get('/:id',procesoController.listProcess);
        this.router.get('/', procesoController.listProcesses);

    }
}
const procesoRoutes=new ProcesoRoutes();
export default procesoRoutes.router;
