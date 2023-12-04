export default class FormatoBDTO
{
    private id: number;
    private desarrollo:string; 
    private estructura: number; 
    private con_comite: number; 
    private con_depto: number; 
    private recibido: Date;
    private observaciones: string;
    private no_revisiones: number;
    private revision: Date;
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