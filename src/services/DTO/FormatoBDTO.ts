export default class FormatoBDTO
{
    private _id: number;
    private _userCodigo:number;
    private _aportes:boolean; 
    private _objetivos:boolean; 
    private _metodologia:boolean; 
    private _entrega:boolean; 
    private _estructura:boolean; 
    private _cronograma:boolean; 
    private _patrocinio:boolean;
    private _concepto:number; 
    private _recibido:Date;
    private _observaciones:string;
    private _no_revisiones:number;
    private _revision:Date;
    public constructor(id: number,
         userCodigo:number,
         aportes:boolean, 
         objetivos:boolean,
         metodologia:boolean,
         entrega:boolean,
         estructura:boolean, 
         cronograma:boolean,
         patrocinio:boolean,
         concepto:number,
         recibido:Date,
         observaciones:string,
         no_revisiones:number,
         revision:Date){

            this._id=id;
            this._userCodigo=userCodigo;
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
}