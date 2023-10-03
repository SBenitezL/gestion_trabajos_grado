import {Request, Response} from 'express';
import IGestionUsuarios from '../services/services/IGestionUsuarios';
import UsuarioDTO from '../services/DTO/UsuarioDTO';
import UsuarioRolDTO from '../services/DTO/UsuarioRolDTO';
import GestionUsuariosImpl from '../services/services/GestionUsuariosImpl';

class UsuarioController{
    private usuarioRolService:IGestionUsuarios;
    public constructor(objImpl: IGestionUsuarios)
    {
        this.usuarioRolService = objImpl;
    }
    public async create(req:Request, res:Response)
    {
        const result = await this.usuarioRolService.crearUsuario(req.body);
        if(result.id != 0)
        {
            res.status(201).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public async update(req:Request, res:Response)
    {
        const {id} = req.params;
        const user:UsuarioRolDTO = req.body;
        const result = await this.usuarioRolService.actualizarUsuario(parseInt(id), user);
        if(result.id == user.id)
        {
            res.status(202).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public async delete(req:Request, res:Response)
    {
        const {id} = req.params
        const result  = this.usuarioRolService.eliminarUsuario(parseInt(id));
        if(result)
        {
            res.status(203).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public async list(req:Request, res:Response)
    {
        const result = await this.usuarioRolService.consultarUsuarios();
        if(result.length > 0)
        {
            res.status(204).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public async listById(req:Request, res:Response)
    {
        const {id} =  req.params
        const result = await this.usuarioRolService.consultarUsuarioPorId(parseInt(id));
        if(result.id == req.body.id)
        {
            res.status(204).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public async listByRol(req:Request, res:Response)
    {
        const {id} =  req.params
        const result = await this.usuarioRolService.consultarUsuariosPorRol(parseInt(id));
        if(result.length > 0)
        {
            res.status(204).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public async listByLogin(req:Request, res:Response)
    {
        const {login} =  req.params
        const result = await this.usuarioRolService.consultarUsuariosPorLogin(login);
        if(result.login == req.body.login)
        {
            res.status(204).json(result);
        }else{
            res.status(401).json(result);
        }
    }
}

const usuarioController = new UsuarioController(new GestionUsuariosImpl());
export default usuarioController;