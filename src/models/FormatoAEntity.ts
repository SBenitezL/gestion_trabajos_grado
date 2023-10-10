export default class FormatoAEntity
{
    public constructor(private _a_id: number,private _a_objetivos:string, private _a_con_entrega:string, 
        private _a_realizacion:string, private _a_recursos:string, private _a_financiacion:string, 
        private _a_per_programa:boolean, private _a_revision:Date, private _a_recibido:Date, private _a_observaciones:string,
        private _a_no_revision:number )
    {

    }
    public get a_id():number{
        return this._a_id;
    }
    public set a_id(a_id:number){
        this._a_id = a_id;
    }

    public get a_objetivos():string{
        return this._a_objetivos;
    }
    public set a_objetivos(a_objetivos:string){
        this._a_objetivos = a_objetivos;
    }

    public get a_con_entrega():string{
        return this._a_con_entrega;
    }
    public set a_con_entrega(a_con_entrega:string){
        this._a_con_entrega = a_con_entrega;
    }

    public get a_realizacion():string{
        return this._a_realizacion;
    }
    public set a_realizacion(a_realizacion:string){
        this._a_realizacion = a_realizacion;
    }

    public get a_recursos():string{
        return this._a_recursos;
    }
    public set a_recursos(a_recursos:string){
        this._a_recursos = a_recursos;
    }

    public get a_financiacion():string{
        return this._a_financiacion;
    }
    public set a_financiacion(a_financiacion:string){
        this._a_financiacion = a_financiacion;
    }

    public get a_per_programa():boolean{
        return this._a_per_programa;
    }
    public set a_per_programa(a_per_programa:boolean){
        this._a_per_programa = a_per_programa;
    }

    public get a_revision():Date{
        return this._a_revision;
    }
    public set a_revision(a_revision:Date){
        this._a_revision = a_revision;
    }

    public get a_recibido():Date{
        return this._a_recibido;
    }
    public set a_recibido(a_recibido:Date){
        this._a_recibido = a_recibido;
    }

    public get a_no_revision():number{
        return this._a_no_revision;
    }
    public set a_no_revision(a_no_revision:number){
        this._a_no_revision = a_no_revision;
    }

    public get a_observaciones():string{
        return this._a_observaciones;
    }
    public set a_observaciones(a_observaciones:string){
        this._a_observaciones = a_observaciones;
    }
}