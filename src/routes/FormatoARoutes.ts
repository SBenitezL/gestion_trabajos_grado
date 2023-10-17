import { Router } from "express";
import formatoAController from "../controllers/FormatoAController";
//TODO:)
class FormatoARoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('/', formatoAController.create);
        this.router.put('/:id', formatoAController.update);
        this.router.delete('/:id', formatoAController.delete);
        this.router.get('/:id', formatoAController.listById);

    }
} 
const formatoARoutes = new FormatoARoutes();
export default formatoARoutes.router;