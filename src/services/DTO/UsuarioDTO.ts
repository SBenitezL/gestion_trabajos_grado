export default class UsuarioDTO{
    private _id: number;
    private _nombre: string;
    private _login: string;
    private _password: string;
    private _rolId: number;
    private _correo:string;

    
    public constructor(id:number, nombre:string, login:string, password:string, rolId:number, correo:string)
    {
        this._id = id;
        this._nombre = nombre;
        this._login = login;
        this._password = password;
        this._rolId = rolId;
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
    public get rolId():number{
        return this._rolId;
    }
    public get correo():string{
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
    public set rolId(rolId:number){
        this._rolId = rolId;
    }
    public set correo(correo:string){
        this._correo = correo;
    }


}