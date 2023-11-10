import {Router} from 'express';
import revisionAController from '../controllers/RevisionAController';
class RevisionFARoutes
{
    public router:Router = Router();    ;
    public constructor()
    {
        this.config();
    }    
    config():void{
        this.router.get('/:cod',revisionAController.list);
    }
}
const revisionFARoutes = new RevisionFARoutes();
export default revisionFARoutes.router;