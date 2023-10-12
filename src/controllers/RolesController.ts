import {Request, Response} from 'express';
import IConsultarRoles from '../services/services/IConsultarRoles';
import consultarRolesImpl from '../services/services/ConsultarRolesImpl'
class RolesController
{
    constructor(private servicios:IConsultarRoles)
    {
    }
    public list = async (req:Request, res:Response)=>
    {
        try{
            const roles = await this.servicios.consultarRoles();
            res.status(200).json(roles);
            
        }catch(error)
        {
            res.status(400).json([]);
        }   
    }   
}
const rolesController = new RolesController(consultarRolesImpl);
export default rolesController;