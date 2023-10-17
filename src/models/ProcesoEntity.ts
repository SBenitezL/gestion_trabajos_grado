export default class ProcesoEntity{
    constructor(
        public prc_id:number,
        public usr_codigo: number,
        public a_id:number,
        public b_id:number,
        public c_id:number,
        public ase_cc:number,
        public prc_form_a:boolean,
        public prc_form_b:boolean,
        public prc_form_c:boolean,
        public prc_titulo:string,
        public prc_tipo:string
    )
    {

    }
}