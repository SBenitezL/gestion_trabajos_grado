import {Router} from 'express';
import usuarioController from '../controllers/UsuarioController'

class UsuarioController{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('/', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
        this.router.get('/',usuarioController.list);
        this.router.get('/rol/:id', usuarioController.listByRol);
        this.router.get('/login/:login', usuarioController.listByLogin);
    }
}