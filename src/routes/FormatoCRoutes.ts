import { Router } from "express";
import formatoCController from "../controllers/FormatoCController";
//TODO:)
class FormatoCRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
        this.router.post('/', formatoCController.create);
        
        this.router.get('/download/:id', formatoCController.download);
        this.router.get('/:id', formatoCController.listById);
        this.router.patch('/send/',formatoCController.sendFormC);

    }
} 
const formatoCRoutes = new FormatoCRoutes();
export default formatoCRoutes.router;