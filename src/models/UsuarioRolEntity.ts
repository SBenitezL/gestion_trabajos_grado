export default class UsuarioRolEntity
{
    private _usr_codigo: number;
    private _usr_nombre: string;
    private _usr_login: string;
    private _usr_password: string;
    private _rol_id: number;
    private _rol_nombre:string;

    
    public constructor(usr_codigo:number, usr_nombre:string, usr_login:string, 
        usr_password:string, rol_id:number, rol_nombre:string)
    {
        this._usr_codigo = usr_codigo;
        this._usr_nombre = usr_nombre;
        this._usr_login = usr_login;
        this._usr_password = usr_password;
        this._rol_id = rol_id;
        this._rol_nombre = rol_nombre;
    }
    public get usr_codigo():number{
        return this._usr_codigo;
    }
    public get usr_nombre():string{
        return this._usr_nombre;
    }
    public get usr_login():string{
        return this._usr_login;
    }
    public get usr_password():string{
        return this._usr_password
    }
    public get rol_id():number{
        return this._rol_id;
    }
    public get rol_nombre():string{
        return this._rol_nombre;
    }

    public set usr_codigo(usr_codigo:number){
        this._usr_codigo = usr_codigo;
    }
    public set usr_nombre(usr_nombre:string){
        this._usr_nombre = usr_nombre;
    }
    public set usr_login(usr_login:string){
        this._usr_login = usr_login;
    }
    public set usr_password(usr_password:string){
        this._usr_password = usr_password;
    }
    public set rol_id(rol_id:number){
        this._rol_id = rol_id;
    }
    public set rol_nombre(rol_nombre:string)
    {
        this._rol_nombre = rol_nombre;
    }
}