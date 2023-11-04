import EstudianteBasicoDTO from "./EstudianteBasicoDTO";

export default interface RevisionADTO
{
    id:number;
    titulo:string;
    tipo:string;
    estudiantes:EstudianteBasicoDTO[];
    estado:number;
}
