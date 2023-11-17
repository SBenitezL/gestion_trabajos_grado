import UsuarioRolEntity from "../../models/UsuarioRolEntity";
import UsuarioRolDTO from "../DTO/UsuarioRolDTO";
import RolDTO from "../DTO/RolDTO";
import CredencialesDTO from "../DTO/CredencialesDTO";
import CredencialesEntity from "../../models/CredencialesEntity";
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
            usuario.push(new UsuarioRolEntity(objDTO.id,objDTO.nombre, objDTO.login, objDTO.password, row.id, row.nombre, objDTO.correo));
        })
        return usuario;
    }
    public entitiesToDTOs(objEntity:UsuarioRolEntity[]): UsuarioRolDTO[]
    {
        const usuarios:UsuarioRolDTO[] = [];
        objEntity.forEach((row)=>
        {
            const user = usuarios.find((usuario)=> usuario.id === row.usr_codigo);
            var rol = new RolDTO(row.rol_id,row.rol_nombre);
            if(user)
            {   
                user.rol.push(rol);
            }
            else
            {
               const temp = new UsuarioRolDTO(row.usr_codigo,row.usr_nombre,row.usr_login,row.usr_password,[],row.usr_correo);
               temp.rol.push(rol);
               usuarios.push(temp);
            }
        })
        return usuarios;
    }
    public jsonToDTO(json:any):UsuarioRolDTO
    {   
        const roles:RolDTO[] = [];
        for (const rol of json._rol)
        {
            roles.push(new RolDTO(rol._id, rol._nombre));
        }
        const usuario = new UsuarioRolDTO(
            parseInt(json._id),
            json._nombre,
            json._login,
            json._password,
            roles,
            json._correo
        );

        return usuario;
    }
    ///
    public entityToDTOC(objEntity:CredencialesEntity):CredencialesDTO{
        const dtoC:CredencialesDTO=new CredencialesDTO(objEntity.CLAVE,objEntity.USERNAME);
        return dtoC;
     }
     public dtoToEntityC(objDTO:CredencialesDTO): CredencialesEntity
     {
         const entity:CredencialesEntity= new CredencialesEntity(objDTO.password,objDTO.login);
         return entity;
     }
     public jsonToDTOCr(json:any):CredencialesDTO
     {   
         const usuario = new CredencialesDTO(
             json._clave,
             json._username
         );
 
         return usuario;
     }
    
 
}