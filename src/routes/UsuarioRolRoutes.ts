import {Router} from 'express';
import usuarioController from '../controllers/UsuarioController'

class UsuarioRolRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
        console.log("routes");
    }
    private config():void
    {
        this.router.post('/', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
        this.router.get('/',usuarioController.list);
        this.router.get('/:id', usuarioController.listById);
        this.router.get('/rol/:id', usuarioController.listByRol);
        this.router.get('/login/:login', usuarioController.listByLogin);
    }
}
const usuarioRolRoutes=new UsuarioRolRoutes();
export default usuarioRolRoutes.router;

