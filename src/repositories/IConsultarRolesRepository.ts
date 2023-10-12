import RolEntity from "../models/RolEntity";

export default interface IConsultarRolesRepository
{
    consultarRoles():Promise<RolEntity[]>;
}