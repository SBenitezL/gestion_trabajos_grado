import { Router } from "express";
import coordinacionController from "../controllers/CoordinacionController";
class CoordinacionRoutes{

    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.patch('/formatos/a/:prc/:usr',coordinacionController.accept);
        this.router.patch('/formatos/a/correcciones/:prc/:usr',coordinacionController.decline);
    }
}
const coordinacionRoutes = new CoordinacionRoutes();
export default coordinacionRoutes.router;