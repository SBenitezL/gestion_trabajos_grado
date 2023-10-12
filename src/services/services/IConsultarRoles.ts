import RolDTO from "../DTO/RolDTO";

export default interface IConsultarRoles
{
    consultarRoles():Promise<RolDTO[]>
}