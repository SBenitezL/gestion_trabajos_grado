import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
import UsuarioEntity from '../models/UsuarioEntity';
import UsuarioRolEntity from '../models/UsuarioRolEntity';


export default class GestionUsuarioRepository{
    public constructor()
    {
    }
    public async crearUsuarioRol(usuario: UsuarioRolEntity[]): Promise<UsuarioEntity[]>{
        //TODO: Refactorizar
        const query = "insert into usuario values(?,?,?,?)";
        const query2 = "insert into usuariorol values(?,?,?,?)";
        const query3 = "select Usuario.usr_codigo, usr_nombre, usr_login, usr_password, Rol.rol_id, rol_nombre, usr_correo from (UsuarioRol inner join Usuario on UsuarioRol.usr_codigo = Usuario.usr_codigo) a inner join Rol on a.rol_id, Rol.rol_id where usr_id = ?";
        const user:UsuarioEntity = new UsuarioEntity(usuario[0].usr_codigo, usuario[0].usr_nombre,usuario[0].usr_login,usuario[0].usr_password, usuario[0].usr_correo);
        const res:UsuarioEntity[] =  [];
        try{
            const [result1]:any = await db.query(query,[user.usr_codigo,user.usr_nombre,user.usr_login, user.usr_password, user.usr_correo]);
            if(result1.affectedRows == 1)
            {
                usuario.forEach(async (row)=>{
                    await db.query(query2,[user.usr_codigo, row.rol_id, new Date(), null]);
                })
                const [result2]:UsuarioRolEntity|any = await db.query(query3,[user.usr_codigo]);
                result2.map((row:UsuarioEntity)=>{
                    res.push(row);
                })
            }
        }catch(error)
        {
            return res;
        }
        return res;
    }
    actualizarUsuario(id: number, usuario: UsuarioRolEntity): Promise<UsuarioRolEntity> {
        throw new Error('Method not implemented.');
    }
    public async eliminarUsuario(id: number): Promise<boolean> {
        const query = "DELETE FROM usuariorol WHERE usr_codigo = ?";
        const query2 = "DELETE FROM usuario WHERE usr_codigo = ?";
        try{
            await db.query(query,[id]);
            await db.query(query2,[id]);
            return true;
        }catch(error)
        {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
    consultarUsuarios(): Promise<UsuarioRolEntity[]> {
        throw new Error('Method not implemented.');
    }
    consultarUsuarioPorId(id: number): Promise<UsuarioRolEntity> {
        throw new Error('Method not implemented.');
    }
    consultarUsuariosPorRol(rolId: number): Promise<UsuarioRolEntity[]> {
        throw new Error('Method not implemented.');
    }
    consultarUsuariosPorLogin(login: string): Promise<UsuarioRolEntity[]> {
        throw new Error('Method not implemented.');
    }
    
}