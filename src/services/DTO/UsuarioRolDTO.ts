export default class UsuarioRolDTO
{
    private _id: number;
    private _nombre: string;
    private _login: string;
    private _password: string;
    private _rol: RolDTO[];
    private _correo: string;
    
    public constructor(id:number, nombre:string, login:string, 
        password:string, rol:RolDTO[], correo:string)
    {
        this._id = id;
        this._nombre = nombre;
        this._login = login;
        this._password = password;
        this._rol = rol;
        this._correo = correo;
    }
    public get id():number{
        return this._id;
    }
    public get nombre():string{
        return this._nombre;
    }
    public get login():string{
        return this._login;
    }
    public get password():string{
        return this._password
    }
    public get rol():RolDTO[]{
        return this._rol;
    }
    public get correo():string
    {
        return this._correo;
    }

    public set id(id:number){
        this._id = id;
    }
    public set nombre(nombre:string){
        this._nombre = nombre;
    }
    public set login(login:string){
        this._login = login;
    }
    public set password(password:string){
        this._password = password;
    }
    public set rol(rol:RolDTO[]){
        this._rol = rol;
    }
    public set correo(correo:string)
    {
        this._correo = correo;
    }
}