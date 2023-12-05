import UsuarioRolEntity from '../../models/UsuarioRolEntity';
import GestionUsuariosRepository from '../../repositories/GestionUsuariosRepository';
import CredencialesDTO from '../DTO/CredencialesDTO';
import UsuarioRolDTO from '../DTO/UsuarioRolDTO';
import UsuarioRolMapper from '../Maping/UserRolMapper';

import enc, {crearHash} from '../Utiles/Encriptar';

import IGestionUsuarios from './IGestionUsuarios';

class GestionUsuariosImpl implements IGestionUsuarios{
    private accesoPersistencia:GestionUsuariosRepository;
    private mapper:UsuarioRolMapper;
    public constructor(){
        this.accesoPersistencia = new GestionUsuariosRepository();
        this.mapper = new UsuarioRolMapper();
    }
    async verificarUsuario(usr: CredencialesDTO): Promise<UsuarioRolDTO> {
        const dto=this.mapper.jsonToDTOCr(usr);
        let entity= this.mapper.dtoToEntityC(dto);
        const res = await this.accesoPersistencia.verificarUsuario(entity);
        return this.mapper.entityToDTO(res);
    
    }
    async crearUsuario(usuario: UsuarioRolDTO): Promise<UsuarioRolDTO> {
        const usuarioDTO = this.mapper.jsonToDTO(usuario);
        usuarioDTO.password = crearHash(usuarioDTO.password);
        const usuarioEntity:UsuarioRolEntity[] = this.mapper.dtoToEntity(usuarioDTO);
        const res = await this.accesoPersistencia.crearUsuarioRol(usuarioEntity);
        return this.mapper.entityToDTO(res);     
    }
    async actualizarUsuario(id: number, usuario: UsuarioRolDTO): Promise<UsuarioRolDTO> {
        const usuarioDTO = this.mapper.jsonToDTO(usuario);
        const usuarioEntity:UsuarioRolEntity[]= this.mapper.dtoToEntity(usuarioDTO)
        const res= await this.accesoPersistencia.actualizarUsuario(id,usuarioEntity);
        return this.mapper.entityToDTO(res);
        
    }
    async eliminarUsuario(id: number): Promise<boolean> {
        return await this.accesoPersistencia.eliminarUsuario(id);
    }
    async consultarUsuarios(): Promise<UsuarioRolDTO[]> {
        const res= await this.accesoPersistencia.consultarUsuarios();
        return this.mapper.entitiesToDTOs(res);
    }
    async consultarUsuarioPorId(id: number): Promise<UsuarioRolDTO> {
        const res = await this.accesoPersistencia.consultarUsuarioPorId(id);
        return this.mapper.entityToDTO(res);
    }
    async consultarUsuariosPorRol(rolId: number): Promise<UsuarioRolDTO[]>  {
        const res= await this.accesoPersistencia.consultarUsuariosPorRol(rolId);
        return this.mapper.entitiesToDTOs(res);
    }
    async consultarUsuariosPorLogin(login: string): Promise<UsuarioRolDTO> {
        const res = await this.accesoPersistencia.consultarUsuariosPorLogin(login);
        return this.mapper.entityToDTO(res);
    }
}

const gestionUsuariosImpl = new GestionUsuariosImpl();
export default gestionUsuariosImpl;