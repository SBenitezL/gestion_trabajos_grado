import db from '../database/Database';
import UsuarioRolEntity from '../models/UsuarioRolEntity';


class GestionUsuarioRepository{
    public constructor()
    {
    }
    public async crearUsuario(usuario: UsuarioRolEntity): Promise<UsuarioRolEntity> {
        throw new Error('Method not implemented.');
    }
    actualizarUsuario(id: number, usuario: UsuarioRolEntity): Promise<UsuarioRolEntity> {
        throw new Error('Method not implemented.');
    }
    eliminarUsuario(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
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