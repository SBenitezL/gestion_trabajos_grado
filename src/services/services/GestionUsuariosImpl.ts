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
    crearUsuario(usuario: UsuarioRolDTO): UsuarioRolDTO {
        var usuarioEntity = this.mapper.dtoToEntity(usuario);
        throw new Error('Method not implemented.');
    }
    async actualizarUsuario(id: number, usuario: UsuarioRolDTO): Promise<UsuarioRolDTO> {
        const usuarioEntity:UsuarioRolEntity[]= this.mapper.dtoToEntity(usuario)
        const res= await this.accesoPersistencia.actualizarUsuario(id,usuarioEntity);
        return this.mapper.entityToDTO(res);
        
    }
    eliminarUsuario(id: number): boolean {
        throw new Error('Method not implemented.');
    }
    async consultarUsuarios(): Promise<UsuarioRolDTO[]> {
        const res= await this.accesoPersistencia.consultarUsuarios();
        //return this.mapper.entitiesToDTOs(res);
    }
    consultarUsuarioPorId(id: number): UsuarioRolDTO {
        throw new Error('Method not implemented.');
    }
    async consultarUsuariosPorRol(rolId: number): Promise<UsuarioRolDTO[]>  {
        const res= await this.accesoPersistencia.consultarUsuariosPorRol(rolId);
        //return this.mapper.entitiesToDTOs(res);
    }
    consultarUsuariosPorLogin(login: string): UsuarioRolDTO[] {
        throw new Error('Method not implemented.');
    }
}