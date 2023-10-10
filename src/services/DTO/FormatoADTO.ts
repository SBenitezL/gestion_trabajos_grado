export default class FormatoADTO{
        private _id: number;
        private _objetivos:string;
        private _con_entrega:string; 
        private _realizacion:string; 
        private _recursos:string; 
        private _financiacion:string; 
        private _per_programa:boolean; 
        private _revision:Date; 
        private _recibido:Date; 
        private _observaciones:string;
        private _no_revision:number; 
    public constructor( id: number,  objetivos:string,  con_entrega:string, 
         realizacion:string,  recursos:string,  financiacion:string, 
         per_programa:boolean,  revision:Date,  recibido:Date,  observaciones:string,
         no_revision:number )
    {
        this._id = id;
        this._objetivos = objetivos;
        this._con_entrega = con_entrega; 
        this. _realizacion = realizacion; 
        this. _recursos = recursos; 
        this. _financiacion = financiacion; 
        this._per_programa = per_programa; 
        this._revision = revision; 
        this._recibido = recibido; 
        this._observaciones = observaciones;
        this._no_revision = no_revision; 
    }

}