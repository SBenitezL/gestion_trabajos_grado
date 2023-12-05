export default class FormatoBDTO
{
    public id!: number;
    public aportes!:number; 
    public objetivos!: number; 
    public metodologia!: number; 
    public entrega!:number; 
    public estructura!: number; 
    public cronograma!: number; 
    public patrocinio!: number;
    public concepto!:number; 
    public recibido!: Date;
    public observaciones!: string;
    public no_revisiones!: number;
    public revision!: Date;
    constructor(id: number, aportes:number, objetivos: number, metodologia: number, entrega:number, estructura: number, cronograma: number, patrocinio: number, concepto:number, recibido: Date, observaciones: string, no_revisiones: number, revision: Date){
        this.id = id;
        this.aportes = aportes;
        this.objetivos = objetivos;   
        this.metodologia = metodologia; 
        this.entrega = entrega;     
        this.estructura = estructura;  
        this.cronograma = cronograma;  
        this.patrocinio = patrocinio;  
        this.concepto = concepto;    
        this.recibido = recibido;    
        this.observaciones = observaciones;
        this.no_revisiones = no_revisiones;
        this.revision = revision;
    }

}