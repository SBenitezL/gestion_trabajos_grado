import {Router} from 'express';
import procesoController from '../controllers/ProcesoController';
class ProcesoRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('',procesoController.create);
        this.router.put('/:id', procesoController.update);
        this.router.delete('/:id', procesoController.delete);
        this.router.get('/:id',procesoController.listProcess);
        this.router.get('', procesoController.listProcesses);
        this.router.patch('/formatosa/:id/:prc', procesoController.sendFA)

    }
}
const procesoRoutes=new ProcesoRoutes();
export default procesoRoutes.router;
