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
    private _interes:string;

    public constructor( id: number,  objetivos:string,  con_entrega:string,
         realizacion:string,  recursos:string,  financiacion:string, 
         per_programa:boolean,  revision:Date,  recibido:Date,  observaciones:string,
         no_revision:number, interes:string )
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
        this._interes = interes;
    }


   

    
    public get id():number{
        return this._id;
    }
    public set id(id:number){
        this._id = id;
    }

    public get objetivos():string{
        return this._objetivos;
    }
    public set objetivos(objetivos:string){
        this._objetivos = objetivos;
    }

    public get con_entrega():string{
        return this._con_entrega;
    }
    public set con_entrega(con_entrega:string){
        this._con_entrega = con_entrega;
    }

    public get realizacion():string{
        return this._realizacion;
    }
    public set realizacion(realizacion:string){
        this._realizacion = realizacion;
    }

    public get recursos():string{
        return this._recursos;
    }
    public set recursos(recursos:string){
        this._recursos = recursos;
    }

    public get financiacion():string{
        return this._financiacion;
    }
    public set financiacion(financiacion:string){
        this._financiacion = financiacion;
    }

    public get per_programa():boolean{
        return this._per_programa;
    }
    public get interes():string{
        return this._interes;
    }
    public set per_programa(per_programa:boolean){
        this._per_programa = per_programa;
    }

    public get revision():Date{
        return this._revision;
    }
    public set revision(revision:Date){
        this._revision = revision;
    }

    public get recibido():Date{
        return this._recibido;
    }
    public set recibido(recibido:Date){
        this._recibido = recibido;
    }

    public get no_revision():number{
        return this._no_revision;
    }
    public set no_revision(no_revision:number){
        this._no_revision = no_revision;
    }

    public get observaciones():string{
        return this._observaciones;
    }
    public set observaciones(observaciones:string){
        this._observaciones = observaciones;
    }
    public set interes(interes:string)
    {
        this._interes = interes;
    }
}