export default class UsuarioEntity{
    public constructor(private _usr_codigo:number, private _usr_nombre:string,private _usr_login:string, private _usr_password:string,private _usr_correo:string)
    {
    }
    public get usr_codigo():number
    {
        return this._usr_codigo;
    }
    public get usr_login():string
    {
        return this._usr_login;
    } 
    public get usr_password():string
    {
        return this._usr_password;
    }
    public get usr_correo():string
    {
        return this._usr_correo;
    }
    public get usr_nombre():string
    {
        return this._usr_nombre;
    }
    public set usr_codigo(usr_codigo:number)
    {
        this._usr_codigo = usr_codigo;
    }
    public set usr_login(usr_login:string)
    {
        this._usr_login = usr_login;
    } 
    public set usr_password(usr_password:string)
    {
        this._usr_password = usr_password;
    }
    public set usr_correo(usr_correo:string)
    {
        this._usr_correo = usr_correo;
    }
    public set usr_nombre(usr_nombre:string)
    {
        this._usr_nombre = usr_nombre;
    }
}