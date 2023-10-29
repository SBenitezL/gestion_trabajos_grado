export default class ProcesoEntity{
    constructor(
        public prc_id:number,
        public usr_codigo: number,
        public a_id:number,
        public b_id:number,
        public c_id:number,
        public nom_asesor:string,
        public prc_form_a:number,
        public prc_form_b:number,
        public prc_form_c:number,
        public prc_titulo:string,
        public prc_tipo:string,
        public est_cod:number[]
    )
    {

    }
}