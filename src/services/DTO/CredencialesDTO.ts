export default class CredencialesDTO{
   
    private _username: string;
    private _clave: string;

    
    public constructor(password:string,login:string)
    {

        this._username = login;
        this._clave = password;
    }
   
    public get login():string{
        return this._username;
    }
    public get password():string{
        return this._clave;
    }
   
    public set login(login:string){
        this._username = login;
    }
    public set password(password:string){
        this._clave= password;
    }
   
    


}