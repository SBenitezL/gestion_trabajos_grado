import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/Database';
import UsuarioEntity from '../models/UsuarioEntity';
import UsuarioRolEntity from '../models/UsuarioRolEntity';
import { query } from 'express';
import CredencialesDTO from '../services/DTO/CredencialesDTO';
import CredencialesEntity from '../models/CredencialesEntity';
import enc from '../services/Utiles/Encriptar';
//TODO: Implementar el uso de transacciones
export default class GestionUsuarioRepository{
    public constructor()
    {
    }
    public async crearUsuarioRol(usuario: UsuarioRolEntity[]): Promise<UsuarioRolEntity[]>{
        //TODO: Refactorizar
        const query = "insert into usuario values(?,?,?,?,?)";
        const query2 = "insert into usuariorol values(?,?,?,?)";
        const query3 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id where usuariorol.USR_CODIGO = ?";
        const user:UsuarioEntity = new UsuarioEntity(usuario[0].usr_codigo, usuario[0].usr_nombre,usuario[0].usr_login,usuario[0].usr_password, usuario[0].usr_correo);
        const res:UsuarioRolEntity[] =  [];
        try{
            this.verificar(user.usr_codigo,user.usr_login, user.usr_correo);
            const [result1]:any = await db.query(query,[user.usr_codigo,user.usr_nombre,user.usr_login, user.usr_password, user.usr_correo]);
            if (result1.affectedRows === 1) {
                const promises = usuario.map(async (row) => {
                    const [result3] = await db.query(query2, [user.usr_codigo, row.rol_id, new Date(), null]);
                });
            
                await Promise.all(promises);
            
                const [result2]: UsuarioRolEntity | any = await db.query(query3, [user.usr_codigo]);
                console.log(user.usr_codigo);
                result2.map((row: UsuarioRolEntity) => {
                    res.push(row);
                    console.log(row);
                });
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
        const query4 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id where usuariorol.USR_CODIGO = ?";
        const res:UsuarioRolEntity[] = [];
        const user:UsuarioEntity = new UsuarioEntity(usuario[0].usr_codigo, usuario[0].usr_nombre,usuario[0].usr_login,usuario[0].usr_password, usuario[0].usr_correo);
        try{
            const [result1]:any = await db.query(query1, [user.usr_codigo, user.usr_nombre, user.usr_login, user.usr_password, user.usr_correo, id]);
            if(result1.affectedRows == 0){
                return res;
            }
            await  db.query(query2,[id]);
            const promises = usuario.map(async (row)=>{
                await db.query(query3,[user.usr_codigo, row.rol_id, new Date(), null]);
            });
            await Promise.all(promises);
            const [result2]:UsuarioRolEntity|any = await db.query(query4,[user.usr_codigo]);
            result2.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    async eliminarUsuario(id: number): Promise<boolean> {
        const query = "DELETE FROM usuariorol WHERE usr_codigo = ?";
        const query2 = "DELETE FROM usuario WHERE usr_codigo = ?";
        try{
            await db.query(query,[id]);
            const [res]:ResultSetHeader|any = await db.query(query2,[id]);
            return res.affectedRows > 0;
        }catch(error)
        {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
    async consultarUsuarios(): Promise<UsuarioRolEntity[]> {
        const query1 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id";
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
     async consultarUsuarioPorId(id: number): Promise<UsuarioRolEntity[]> {
        const query = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id where USUARIO.usr_codigo = ?";
        const res:UsuarioRolEntity[] = []
        console.log(id);
        try{
            
            const [result]:UsuarioRolEntity|any  = await db.query(query, [id]);
            result.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    async consultarUsuariosPorRol(rolId: number): Promise<UsuarioRolEntity[]> {
        const query1 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id where ROL.rol_id = ?";
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
    async consultarUsuariosPorLogin(login: string): Promise<UsuarioRolEntity[]> {
        const query3 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id where usr_login = ?";
        const res:UsuarioRolEntity[] = []
        try{
            const [result]:UsuarioRolEntity|any  = await db.query(query3, [login]);
            result.map((row:UsuarioRolEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
    async verificar(id:number, login:string, email:string):Promise<boolean>
    {
        const query = "call verificarUsuario(?,?,?)";
        try{
            const [res] = await db.query(query, [id,login,email]);
            console.log(res);
        }catch(error)
        {

        }
        return false;
    }
    async verificarUsuario(usr: CredencialesEntity): Promise<UsuarioRolEntity[]>
    {
        const query = "SELECT USR_PASSWORD AS CL FROM USUARIO WHERE USR_LOGIN=? ";
        const query3 = "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) inner join ROL on USUARIOROL.rol_id = ROL.rol_id WHERE USUARIO.USR_LOGIN=? AND USUARIO.USR_PASSWORD=?";
        const usuario:UsuarioRolEntity= new UsuarioRolEntity(0,"","","",0,"","");
        const crede:CredencialesEntity= new CredencialesEntity(usr.CLAVE,usr.USERNAME);
        const res:UsuarioRolEntity[] = []
        try{

            const [res]:any =await db.query(query,[crede.USERNAME]);
            const pass=res[0]?.CL ||null;
            console.log("contra",pass,crede.CLAVE);
            //enc.comparePassword(pass,crede.CLAVE)
            if (pass === crede.CLAVE) {
                const [result]:UsuarioRolEntity|any  = await db.query(query3, [crede.USERNAME,crede.CLAVE]);
               // console.log(result);
                result.map((row:UsuarioRolEntity)=>{
                    res.push(row);})
                    return res;
           } else {
             console.log('No concuerdan las contraseñas encriptadas');
             return res;
           }
            
        }catch(error)
        {
            return res;
        }
        console.log(res);
        return res;
    }
}
/**
 *    "select USUARIO.usr_codigo, usr_nombre, usr_login, usr_password, ROL.rol_id, rol_nombre, usr_correo
 *  from (USUARIOROL inner join USUARIO on USUARIOROL.usr_codigo = USUARIO.usr_codigo) 
 * inner join ROL on USUARIOROL.rol_id = ROL.rol_id 
 * WHERE USUARIO.USR_LOGIN=? AND USUARIO.USR_PASSWORD=?";

 */