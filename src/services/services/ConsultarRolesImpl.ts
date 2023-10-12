import RolEntity from "../../models/RolEntity";
import ConsultarRolesRepository from "../../repositories/ConsultarRolesRepository";
import IConsultarRolesRepository from "../../repositories/IConsultarRolesRepository";
import RolDTO from "../DTO/RolDTO";
import RolMapper from "../Maping/RolMapper";
import IConsultarRoles from "./IConsultarRoles";

class ConsultarRolesImpl implements IConsultarRoles
{
    private mapper:RolMapper;
    constructor(private datos:IConsultarRolesRepository)
    {
        this.mapper = new RolMapper();
    }
    async consultarRoles(): Promise<RolDTO[]> {
        const roles:RolEntity[] = await this.datos.consultarRoles();
        return this.mapper.entitiesToDTO(roles);
    }
}
const consultarRolesImpl = new ConsultarRolesImpl(new ConsultarRolesRepository());
export default consultarRolesImpl;