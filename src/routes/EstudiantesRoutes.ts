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
    }
}
const estudiantesRoutes = new EstudiantesRoutes();
export default estudiantesRoutes.router;