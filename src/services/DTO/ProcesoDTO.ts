export default class ProcesoDTO{
    constructor(
    public id:number,
    public usuario: number,
    public fa:number,
    public fb:number,
    public fc:number,
    public ase:number,
    public status_a:boolean,
    public status_b:boolean,
    public status_c:boolean,
    public titulo:string,
    public tipo:string
    )
    { 
        //TODO:Agregar Asesor
    }
}