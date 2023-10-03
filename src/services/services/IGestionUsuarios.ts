import UsuarioRolDTO from '../DTO/UsuarioRolDTO';
export default interface IGestionUsuarios
{
    //200
    //201 -> Crear
    //202 -> Actualizar
    //203 -> Eliminar
    //304 -> Sin cmabios
    /**
     * Crea un nuevo usuario
     * @route POST /api/usuarios
     * @param {UsuarioRolDTO} usuario Usuario a ser ingresado en la base de datos.
     * @returns {UsuarioRolDTO} Usuario creado en la base de datos.
     */
    crearUsuario(usuario:UsuarioRolDTO):Promise<UsuarioRolDTO>;
    /**
     * Actualizar un usuario existente
     * @route PUT /api/usuarios/{rolId}
     * @param {number} id Id del usuario a modificar
     * @param {UsuarioRolDTO} usuario Nuevos datos del usuario
     * @returns {UsuarioRolDTO} Usuario actualizado en la base de datos
     */
    actualizarUsuario(id:number, usuario:UsuarioRolDTO):Promise<UsuarioRolDTO>;
    /**
     * Eliminar un usuario
     * @route DELETE /api/usuarios/{id}
     * @param {number} id id del usuario a eliminar
     * @returns {boolean} true en caso de éxito y falso en caso contrario. 
     */
    eliminarUsuario(id:number):Promise<boolean>;
    /**
     * Obtiene la lista de todos los usuarios
     * @route GET /api/usuarios
     * @returns {UsuarioRolDTO[]} lista de todos los usuarios del sistema
     */
    consultarUsuarios():Promise<UsuarioRolDTO[]>;
    /**
     * Obtiene un usuario por id
     * @route GET /api/usuarios/{id}
     * @param {number} id ID del usuario a buscar
     * @returns {UsuarioRolDTO} Usuario recuperado con el Id
     */
    consultarUsuarioPorId(id:number):Promise<UsuarioRolDTO>;
    /**
     * Obtiene usuarios por rol
     * @route GET /api/usuarios/rol/{id}
     * @param {number} rolId Id del rol que tiene el usuario
     * @returns {UsuarioRolDTO[]} Lista de los usuarios que tienen ese rol
     */
    consultarUsuariosPorRol(rolId:number):Promise<UsuarioRolDTO[]>;
    /**
     * Obtiene usuarios por login
     * @router GET /api/usuarios/login/{login}
     * @param {string} login Nombre de usuario para el inicio de sesión
     */
    consultarUsuariosPorLogin(login:string):Promise<UsuarioRolDTO>;
}