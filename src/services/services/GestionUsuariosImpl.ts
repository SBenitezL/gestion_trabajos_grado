import UsuarioRolEntity from '../../models/UsuarioRolEntity';
import GestionUsuariosRepository from '../../repositories/GestionUsuariosRepository';
import UsuarioRolDTO from '../DTO/UsuarioRolDTO';
import UsuarioRolMapper from '../Maping/UserRolMapper';
import IGestionUsuarios from './IGestionUsuarios';
export default class GestionUsuariosImpl implements IGestionUsuarios{
    private accesoPersistencia:GestionUsuariosRepository;
    private mapper:UsuarioRolMapper;
    public constructor(){
        this.accesoPersistencia = new GestionUsuariosRepository();
        this.mapper = new UsuarioRolMapper();
    }
    async crearUsuario(usuario: UsuarioRolDTO): Promise<UsuarioRolDTO> {
        const usuarioEntity:UsuarioRolEntity[] = this.mapper.dtoToEntity(usuario);
        const res = await this.accesoPersistencia.crearUsuarioRol(usuarioEntity);
        return this.mapper.entityToDTO(res);     
    }
    actualizarUsuario(id: number, usuario: UsuarioRolDTO): UsuarioRolDTO {
        throw new Error('Method not implemented.');
    }
    async eliminarUsuario(id: number): Promise<boolean> {
        return await this.accesoPersistencia.eliminarUsuario(id);
    }
    consultarUsuarios(): UsuarioRolDTO[] {
        throw new Error('Method not implemented.');
    }
    async consultarUsuarioPorId(id: number): Promise<UsuarioRolDTO> {
        const res = await this.accesoPersistencia.consultarUsuarioPorId(id);
        return this.mapper.entityToDTO(res);
    }
    consultarUsuariosPorRol(rolId: number): UsuarioRolDTO[] {
        throw new Error('Method not implemented.');
    }
    async consultarUsuariosPorLogin(login: string): Promise<UsuarioRolDTO> {
        const res = await this.accesoPersistencia.consultarUsuariosPorLogin(login);
        return this.mapper.entityToDTO(res);
    }
}