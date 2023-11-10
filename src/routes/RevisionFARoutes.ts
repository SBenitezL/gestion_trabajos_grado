import {Router} from 'express';
import revisionAController from '../controllers/RevisionAController';
class RevisionFARoutes
{
    public router:Router;
    public constructor()
    {
        this.router = Router();    
    }    
    config():void{
        this.router.get('/:cod',revisionAController.list);
    }
}
const revisionFARoutes = new RevisionFARoutes();
export default revisionFARoutes.router;