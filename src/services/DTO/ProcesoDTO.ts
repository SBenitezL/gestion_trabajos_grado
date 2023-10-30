import EstudianteDTO from "./EstudianteDTO";

export default class ProcesoDTO{
    constructor(
    public id:number,//Id del proceso, autogenerado en el sql
    public usuario: number,//Director de la tesis
    public fa:number,//Llave del formato A
    public fb:number,//Llave del formato B
    public fc:number,//Llave del formato C
    public ase:string,// Asesor(opcional)
    public status_a:number,//Redundancia del estado del formato A
    public status_b:number,//Redundancia del estado del formato B
    public status_c:number,// Redundancia del estado del formato C
    public titulo:string, // Titulo del proyecto
    public tipo:string, // Trabajo de Investigación o Práctica Profesional
    public estudiantes:number[] // Codigo estudiantes
    )
    { 
        //TODO:Agregar Asesor
    }
}