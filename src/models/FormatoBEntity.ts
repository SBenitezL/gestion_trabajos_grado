import { BlobOptions } from "buffer";

export default class FormatoBEntity
{
    public constructor( 
        public B_ID:number,
        public USR_CODIGO:number,
        public B_APORTES:boolean,
        public B_OBJETIVOS:boolean,
        public B_METODOLOGIA:boolean,
        public B_ENTREGA:boolean,
        public B_ESTRUCTURA:boolean,
        public B_CRONOGRAMA:boolean,
        public B_PATROCINIO:boolean,
        public B_CONCEPTO:boolean,
        public B_RECIBIDO:Date,
        public B_OBSERVACIONES:string,
        public B_NO_REVISIONES:number,
        public B_REVISION:Date
        ){

    }
}