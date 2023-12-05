export default class FormatoCDTO
{
   
    public id!: number;
    public desarrollo!:string; 
    public estructura!: number; 
    public con_comite!: number; 
    public con_depto!: number; 
    public recibido!: Date;
    public observaciones!: string;
    public no_revisiones!: number;
    public revision!: Date;
    public constructor(id: number,desarrollo:string,estructura:number,
        con_comite:number,con_depto:number,recibido:Date,
        observaciones:string,no_revisiones:number,revision:Date){
            this.id=id;
            this.desarrollo=desarrollo; 
            this.estructura=estructura; 
            this.con_comite=con_comite; 
            this.con_depto=con_depto;
            this.recibido=recibido;
            this.observaciones=observaciones;
            this.no_revisiones=no_revisiones;
            this.revision=revision;
    }
}