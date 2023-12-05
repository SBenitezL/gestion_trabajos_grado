import { Router } from "express";
import formatoBController from "../controllers/FormatoBController";
//TODO:)
class FormatoBRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('/', formatoBController.create);
        this.router.put('/:id', formatoBController.update);
        this.router.delete('/', formatoBController.delete);
        this.router.get('/download/:id', formatoBController.download);
        this.router.get('/:id', formatoBController.listById);

    }
} 
const formatoBRoutes = new FormatoBRoutes();
export default formatoBRoutes.router;