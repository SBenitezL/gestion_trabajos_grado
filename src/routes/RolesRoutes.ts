import {Router} from 'express';
import rolesController from '../controllers/RolesController';
class RolesRoutes{
    public router:Router= Router();

    constructor(){
        this.config();

    }
    config():void{
        this.router.get('/',rolesController.list);
    }
}
const rolesRoutes=new RolesRoutes();
export default rolesRoutes.router;