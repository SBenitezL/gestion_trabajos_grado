export default class FormatoCEntity
{
    public constructor( 
        public c_ID:number,
        public C_DESARROLLO:string,
        public C_ESTRUCTURA:number,
        public C_CON_COMITE:number,
        public C_CON_DEPTO:number,
        public C_RECIBIDO:Date,
        public C_OBSERVACIONES:string,
        public C_NO_REVISIONES:number,
        public C_REVISION:Date
        ){

    }
}