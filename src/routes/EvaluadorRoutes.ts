import { Router } from "express";
import evaluadorController from "../controllers/EvaluadorController";
//TODO:)
class EvaluadorRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.get('/', evaluadorController.findAll);

    }
} 
const evaluadorRoutes = new EvaluadorRoutes();
export default evaluadorRoutes.router;