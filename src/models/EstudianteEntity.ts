export default class EstudianteEntity
{
    public constructor(private _est_codigo: number, private _prc_id:number, private _est_nombre:string, private _correo:string)
    {
    }
    public get est_codigo():number{
        return this._est_codigo;
    }
    public get prc_id():number
    {
        return this._prc_id;
    }
    public get est_nombre():string
    {
        return this._est_nombre;
    }
    public get correo():string
    {
        return this._correo;
    }

    public set est_codigo(est_codigo:number)
    {
        this._est_codigo=est_codigo;
    }
    public set prc_id(prc_id:number)
    {
        this._prc_id = prc_id;
    }
    public set est_nombre(est_nombre:string)
    {
        this._est_nombre=est_nombre;
    }
    public set correo(correo:string){
        this._correo=correo;
    }
}