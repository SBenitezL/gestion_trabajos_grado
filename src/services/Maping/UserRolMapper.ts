import UsuarioRolEntity from "../../models/UsuarioRolEntity";
import UsuarioRolDTO from "../DTO/UsuarioRolDTO";

export default class UsuarioRolMapper{
    public constructor(){

    }
    /**
     * Convierte una lista de UsuarioRolEntity en un objeto UsuarioRolDTO, 
     * se utiliza cuando los datos corresponden a los de un solo usuario
     * @param {UsuarioRolEntity} objEntity 
     * 
     */
    public entityToDTO(objEntity:UsuarioRolEntity[]):UsuarioRolDTO{
        var usuario:UsuarioRolDTO = new UsuarioRolDTO(0,"","","",[],"");
        objEntity.forEach((row)=>{
            if(usuario.id != row.usr_codigo)
            {
                usuario.id = row.usr_codigo;
                usuario.login = row.usr_login;
                usuario.nombre = row.usr_nombre;
                usuario.password = row.usr_password;
                usuario.rol =[];
                usuario.correo = row.usr_correo;
            }
            usuario.rol.push(new RolDTO(row.rol_id, row.rol_nombre));
        })
       return usuario;
    }

    public dtoToEntity(objDTO:UsuarioRolDTO): UsuarioRolEntity[]
    {
        var usuario:UsuarioRolEntity[] = [];
        objDTO.rol.forEach((row)=>{
            usuario.push(new UsuarioRolEntity(objDTO.id, objDTO.login,objDTO.nombre, objDTO.password, row.id, row.nombre, objDTO.correo));
        })
        return usuario;
    }
    public entitiesToDTOs(objEntity:UsuarioRolEntity[]): UsuarioRolDTO[]
    {
        const usuarios:UsuarioRolDTO[] = [];
        objEntity.forEach((row)=>
        {
            const user = usuarios.find((usuario)=> usuario.id === row.usr_codigo);
            if(user)
            {
                user.rol.push(new RolDTO(row.rol_id,row.rol_nombre));
            }
            else
            {
                usuarios.push(new UsuarioRolDTO(row.usr_codigo,row.usr_nombre,row.usr_login,row.usr_password,[new RolDTO(row.rol_id,row.rol_nombre)],row.usr_correo));
            }
        })
        return usuarios;
    }
}