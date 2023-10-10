export default class FormatoADTO{
    public constructor(
        private _id:number, private _objetivos:string,
        private _conEntrega:string, private _realizacion:string,
        private _recursos:string, private _financiacion:string, private _perPrograma:boolean,
        private _revision:Date, private _recibido:Date, private _observaciones:string,
        private _noRevision:number 
    )
    {}
    public get id():number
    {
        return this._id;
    } 
    public get objetivos():string
    {
        return this._objetivos;
    }
    public get conEntrega():string
    {
        return this._conEntrega;
    }
    public get realizacion():string
    {
        return this._realizacion;
    }
    public get recursos():string
    {
        return this._recursos;
    }
    public get a_financiacion():string
    {
        return this._financiacion;
    }
    public get perPrograma():boolean
    {
        return this._perPrograma;
    }
    public get revision():Date
    {
        return this._revision;
    }
    public get recibido():Date
    {
        return this._recibido;
    }
    public get observaciones():string
    {
        return this._observaciones;
    }
    public get noRevision():number 
    {
        return this._noRevision;
    }


    public set id(id:number)
    {
        this._id = id;
    } 
    public set objetivos(objetivos:string)
    {
        this._objetivos = objetivos;
    }
    public set conEntrega(conEntrega:string)
    {
        this._conEntrega = conEntrega;
    }
    public set realizacion(realizacion:string)
    {
        this._realizacion = realizacion;
    }
    public set recursos(recursos:string)
    {
        this._recursos = recursos;
    }
    public set a_financiacion(financiacion:string)
    {
        this._financiacion = financiacion;
    }
    public set perPrograma(perPrograma:boolean)
    {
        this._perPrograma = perPrograma;
    }
    public set revision(revision:Date)
    {
        this._revision = revision;
    }
    public set recibido(recibido:Date)
    {
        this._recibido = recibido;
    }
    public set observaciones(observaciones:string)
    {
        this._observaciones = observaciones;
    }
    public set noRevision(noRevision:number )
    {
        this._noRevision = noRevision;
    }
}