import { Router } from "express";
import consejoController from "../controllers/ConsejoController";
class ConsejoRoutes{

    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/formato/a/:usuarioId',consejoController.list);
    }
}
const consejoRoutes = new ConsejoRoutes();
export default consejoRoutes.router;