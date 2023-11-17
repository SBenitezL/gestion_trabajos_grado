import {Request, Response} from 'express';
import IGestionUsuarios from '../services/services/IGestionUsuarios';
import UsuarioRolDTO from '../services/DTO/UsuarioRolDTO';
import gestionUsuariosImpl from '../services/services/GestionUsuariosImpl';
import CredencialesDTO from '../services/DTO/CredencialesDTO';

class UsuarioController{
    private usuarioRolService:IGestionUsuarios;
    public constructor(objImpl: IGestionUsuarios)
    {
        this.usuarioRolService = objImpl;
    }
    public create = async (req:Request, res:Response)=>
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
    public update =  async (req:Request, res:Response)=>
    {
        const {id} = req.params;
        const user = req.body;
        const result = await this.usuarioRolService.actualizarUsuario(parseInt(id), user);
        if(result.id == user._id)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public delete = async (req:Request, res:Response)=>
    {
        const {id} = req.params
        const result  =await this.usuarioRolService.eliminarUsuario(parseInt(id));
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public list = async (req:Request, res:Response)=>
    {
        const result = await this.usuarioRolService.consultarUsuarios();
        if(result.length >0)
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public listById = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        console.log(id)
        const result = await this.usuarioRolService.consultarUsuarioPorId(parseInt(id));
        if(result.id == parseInt(id))
        {
            res.status(200).json(result);
        }
        else{
            res.status(401).json(result);
        }
    }
    public listByRol = async (req:Request, res:Response)=>
    {
        const {id} =  req.params
        const result = await this.usuarioRolService.consultarUsuariosPorRol(parseInt(id));
        if(result.length > 0)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public listByLogin = async (req:Request, res:Response) =>
    {
        const {login} =  req.params
        const result = await this.usuarioRolService.consultarUsuariosPorLogin(login);
        if(result.login == login)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
    public verify =  async (req:Request, res:Response)=>
    {
        const credencial:CredencialesDTO=req.body;
        console.log("controller:",credencial)
        const result = await this.usuarioRolService.verificarUsuario(credencial);
        if(result.id != 0)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json(result);
        }
    }
}

const usuarioController = new UsuarioController(gestionUsuariosImpl);
export default usuarioController;