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
        this.router.post('/', procesoController.create);
        this.router.put('/:id', procesoController.update);
        this.router.delete('/:id', procesoController.delete);
        this.router.get('/',procesoController.list);
        this.router.get('/:id', procesoController.listById);
        this.router.get('/rol/:id', procesoController.listByRol);
        this.router.get('/login/:login', procesoController.listByLogin);
    }
}
const procesoRoutes=new ProcesoRoutes();
export default procesoRoutes.router;
