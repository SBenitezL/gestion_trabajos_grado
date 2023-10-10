export default class FormatoAEntity{
    public constructor(
        private _a_id:number, private _a_objetivos:string,
        private _a_con_entrega:string, private _a_realizacion:string,
        private _a_recursos:string, private _a_financiacion:string, private _a_per_programa:boolean,
        private _a_revision:Date, private _a_recibido:Date, private _a_observaciones:string,
        private _a_no_revision:number 
    )
    {}
    public get a_id():number
    {
        return this._a_id;
    } 
    public get a_objetivos():string
    {
        return this._a_objetivos;
    }
    public get a_con_entrega():string
    {
        return this._a_con_entrega;
    }
    public get a_realizacion():string
    {
        return this._a_realizacion;
    }
    public get a_recursos():string
    {
        return this._a_recursos;
    }
    public get a_financiacion():string
    {
        return this._a_financiacion;
    }
    public get a_per_programa():boolean
    {
        return this._a_per_programa;
    }
    public get a_revision():Date
    {
        return this._a_revision;
    }
    public get a_recibido():Date
    {
        return this._a_recibido;
    }
    public get a_observaciones():string
    {
        return this._a_observaciones;
    }
    public get a_no_revision():number 
    {
        return this._a_no_revision;
    }


    public set a_id(id:number)
    {
        this._a_id = id;
    } 
    public set a_objetivos(objetivos:string)
    {
        this._a_objetivos = objetivos;
    }
    public set a_con_entrega(conEntrega:string)
    {
        this._a_con_entrega = conEntrega;
    }
    public set a_realizacion(realizacion:string)
    {
        this._a_realizacion = realizacion;
    }
    public set a_recursos(recursos:string)
    {
        this._a_recursos = recursos;
    }
    public set a_financiacion(financiacion:string)
    {
        this._a_financiacion = financiacion;
    }
    public set a_per_programa(perPrograma:boolean)
    {
        this._a_per_programa = perPrograma;
    }
    public set a_revision(revision:Date)
    {
        this._a_revision = revision;
    }
    public set a_recibido(recibido:Date)
    {
        this._a_recibido = recibido;
    }
    public set a_observaciones(observaciones:string)
    {
        this._a_observaciones = observaciones;
    }
    public set a_no_revision(noRevision:number )
    {
        this._a_no_revision = noRevision;
    }
}