import EstudianteEntity from "../models/EstudianteEntity"

export default interface IGestionEstudiantesRepository
{
    crearEstudiante(estudiante:EstudianteEntity):Promise<void>;
    actualizarEstudiante(cod:number, estudiante:EstudianteEntity):Promise<EstudianteEntity>;
    eliminarEstudiante(cod:number):Promise<boolean>;
    consultarEstudiante(con:number):Promise<EstudianteEntity>;
    consultarEstudiantes():Promise<EstudianteEntity[]>;
}