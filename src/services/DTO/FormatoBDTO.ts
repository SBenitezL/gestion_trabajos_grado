export default class FormatoBDTO
{
    private _id: number;
    private _aportes:number; 
    private _objetivos: number; 
    private _metodologia: number; 
    private _entrega: number; 
    private _estructura: number; 
    private _cronograma: number; 
    private _patrocinio: number;
    private _concepto: number; 
    private _recibido: Date;
    private _observaciones: string;
    private _no_revisiones: number;
    private _revision: Date;
    public constructor(id: number,aportes:number,objetivos:number,metodologia:number,entrega:number,estructura:number,cronograma:number,patrocinio:number,concepto:number,recibido:Date,observaciones:string,no_revisiones:number,revision:Date){

            this._id=id;
            this._aportes=aportes; 
            this._objetivos=objetivos; 
            this._metodologia=metodologia; 
            this._entrega=entrega; 
            this._estructura=estructura; 
            this._cronograma=cronograma; 
            this._patrocinio=patrocinio;
            this._concepto=concepto; 
            this._recibido=recibido;
            this._observaciones=observaciones;
            this._no_revisiones=no_revisiones;
            this._revision=revision;
    }
    public get id():number{
        return this._id;
    }
    public set id(id:number){
        this._id = id;
    }
  
    public get aportes():number{
        return this._aportes;
    }
   
    public set aportes(aportes:number){
        this._aportes = aportes;
    }
    public get objetivos(): number {
        return this._objetivos;
    }
    public set objetivos(value: number) {
        this._objetivos = value;
    }
    public get metodologia(): number {
        return this._metodologia;
    }
    public set metodologia(value: number) {
        this._metodologia = value;
    }
    public get entrega(): number {
        return this._entrega;
    }
    public set entrega(value: number) {
        this._entrega = value;
    }

    public get estructura(): number {
        return this._estructura;
    }
    public set estructura(value: number) {
        this._estructura = value;
    }
    public get cronograma(): number {
        return this._cronograma;
    }
    public set cronograma(value: number) {
        this._cronograma = value;
    }
    public get patrocinio(): number {
        return this._patrocinio;
    }
    public set patrocinio(value: number) {
        this._patrocinio = value;
    }
    public get concepto(): number {
        return this._concepto;
    }
    public set concepto(value: number) {
        this._concepto = value;
    }
    public get recibido(): Date {
        return this._recibido;
    }
    public set recibido(value: Date) {
        this._recibido = value;
    }
    public get observaciones(): string {
        return this._observaciones;
    }
    public set observaciones(value: string) {
        this._observaciones = value;
    }
    public get no_revisiones(): number {
        return this._no_revisiones;
    }
    public set no_revisiones(value: number) {
        this._no_revisiones = value;
    }
    public get revision(): Date {
        return this._revision;
    }
    public set revision(value: Date) {
        this._revision = value;
    }




}