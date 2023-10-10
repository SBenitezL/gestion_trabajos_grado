export default class EstudianteDTO
{
    public constructor(private _codigo: number, private _proceso:number, private _nombre:string, private _correo:string)
    {
    }
    public get codigo():number{
        return this._codigo;
    }
    public get proceso():number
    {
        return this._proceso;
    }
    public get nombre():string
    {
        return this._nombre;
    }
    public get correo():string
    {
        return this._correo;
    }

    public set codigo(codigo:number)
    {
        this._codigo=codigo;
    }
    public set proceso(proceso:number)
    {
        this._proceso = proceso;
    }
    public set nombre(nombre:string)
    {
        this._nombre=nombre;
    }
    public set correo(correo:string){
        this._correo=correo;
    }
}