import RolEntity from "../models/RolEntity";
import IConsultarRolesRepository from "./IConsultarRolesRepository";
import db from '../database/Database';
export default class ConsultarRolesRepository implements IConsultarRolesRepository
{
    async consultarRoles(): Promise<RolEntity[]> {
        const query = "SELECT * FROM ROL";
        const res:RolEntity[] = [];
        try
        {
            const [result]:RolEntity|any = await db.query(query);
            console.log(result);
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