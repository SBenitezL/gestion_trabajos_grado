import EstudianteReporte from "../../../services/DTO/Report/EstudianteReporte";
export default interface IEstudianteReporte
{
    getEstudiantes(id:number):Promise<EstudianteReporte[]>;
}