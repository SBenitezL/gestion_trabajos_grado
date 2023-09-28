class RolDTO{
    public constructor(private _id:number, private _nombre:string)
    {
    }
    public get id():number
    {
        return this._id;
    }
    public get nombre():string
    {
        return this._nombre;
    }

    public set id(id:number)
    {
        this._id = id;
    }
    public set nombre(nombre:string)
    {
        this._nombre = nombre;
    }

}