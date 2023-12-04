import { BlobOptions } from "buffer";

export default class FormatoBEntity
{
    public constructor( 
        public B_ID:number,
        public B_APORTES:number,
        public B_OBJETIVOS:number,
        public B_METODOLOGIA:number,
        public B_ENTREGA:number,
        public B_ESTRUCTURA:number,
        public B_CRONOGRAMA:number,
        public B_PATROCINIO:number,
        public B_CONCEPTO:number,
        public B_RECIBIDO:Date,
        public B_OBSERVACIONES:string,
        public B_NO_REVISIONES:number,
        public B_REVISION:Date
        ){

    }
}