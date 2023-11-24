import EvaluadorEntity from "./EvaluadorEntity";

export default class AsignacionesEntity extends EvaluadorEntity
{
    constructor(
        usr_codigo:number,
        usr_nombre:string,
        usr_correo:string,
        public prc_id:number
    ){
        super(usr_codigo, usr_nombre, usr_correo);
    }

}