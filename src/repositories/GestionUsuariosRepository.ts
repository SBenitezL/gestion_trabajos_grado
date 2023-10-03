import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
import UsuarioEntity from '../models/UsuarioEntity';
import UsuarioRolEntity from '../models/UsuarioRolEntity';
import { query } from 'express';

//TODO: Implementar el uso de transacciones
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
    async actualizarUsuario(id: number, usuario: UsuarioRolEntity[]): Promise<UsuarioRolEntity[]> {
        const  query1 = "update usuario set usr_codigo = ?,  usr_nombre = ?, usr_login = ?, usr_password = ?, usr_correo = ? where usr_codigo = ?";
        const query2 = "delete from usuariorol where usr_codigo = ?";
        const query3 = "insert into usuariorol values(?,?,?,?)";
        const query4 = "select Usuario.usr_codigo, usr_nombre, usr_login, usr_password, Rol.rol_id, rol_nombre, usr_correo from (UsuarioRol inner join Usuario on UsuarioRol.usr_codigo = Usuario.usr_codigo) a inner join Rol on a.rol_id, Rol.rol_id where usr_id = ?";
        const res:UsuarioRolEntity[] = [];
        const user:UsuarioEntity = new UsuarioEntity(usuario[0].usr_codigo, usuario[0].usr_nombre,usuario[0].usr_login,usuario[0].usr_password, usuario[0].usr_correo);
        try{
            const [result1]:any = await db.query(query1, [user.usr_codigo, user.usr_nombre, user.usr_login, user.usr_password, user.usr_correo, id]);
            if(result1.affectedRows == 0){
                return res;
            }
            await  db.query(query2,[id]);
            usuario.forEach(async (row)=>{
                await db.query(query3,[user.usr_codigo, row.rol_id, new Date(), null]);
            })
            const [result2]:UsuarioRolEntity|any = await db.query(query4,[user.usr_codigo]);
            result2.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    eliminarUsuario(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async consultarUsuarios(): Promise<UsuarioRolEntity[]> {
        const query1 = "select Usuario.usr_codigo, usr_nombre, usr_login, usr_password, Rol.rol_id, rol_nombre, usr_correo from (UsuarioRol inner join Usuario on UsuarioRol.usr_codigo = Usuario.usr_codigo) a inner join Rol on a.rol_id, Rol.rol_id";
        const res:UsuarioRolEntity[] = []
        try{
            const [result]:UsuarioRolEntity|any  = await db.query(query1);
            result.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    consultarUsuarioPorId(id: number): Promise<UsuarioRolEntity> {
        throw new Error('Method not implemented.');
    }
    async consultarUsuariosPorRol(rolId: number): Promise<UsuarioRolEntity[]> {
        const query1 = "select Usuario.usr_codigo, usr_nombre, usr_login, usr_password, Rol.rol_id, rol_nombre, usr_correo from (UsuarioRol inner join Usuario on UsuarioRol.usr_codigo = Usuario.usr_codigo) a inner join Rol on a.rol_id, Rol.rol_id where Rol.rol_id = ?";
        const res:UsuarioRolEntity[] = []
        try{
            const [result]:UsuarioRolEntity|any  = await db.query(query1, [rolId]);
            result.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    consultarUsuariosPorLogin(login: string): Promise<UsuarioRolEntity[]> {
        throw new Error('Method not implemented.');
    }
    
}