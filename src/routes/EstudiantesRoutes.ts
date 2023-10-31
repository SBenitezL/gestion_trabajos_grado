import { Router } from "express";
import estudianteController from "../controllers/EstudiantesController";
class EstudiantesRoutes{

    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/',estudianteController.list);
        this.router.get('/:cod',estudianteController.getOne);
    }
}
const estudiantesRoutes = new EstudiantesRoutes();
export default estudiantesRoutes.router;