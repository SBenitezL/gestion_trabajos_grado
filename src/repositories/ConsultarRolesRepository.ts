import RolEntity from "../models/RolEntity";
import IConsultarRolesRepository from "./IConsultarRolesRepository";
import db from '../database/Database';
export default class ConsultarRolesRepository implements IConsultarRolesRepository
{
    async consultarRoles(): Promise<RolEntity[]> {
        const query = "SELECT rol_id, rol_nombre FROM ROL";
        const res:RolEntity[] = [];
        try
        {
            const [result]:RolEntity|any = await db.query(query);
            result.map((row:RolEntity)=>
            {
                res.push(row);
            });
            return res;
        }catch(error)
        {
            return [];
        }
    }

}