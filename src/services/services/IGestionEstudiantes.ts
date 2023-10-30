import EstudianteDTO from "../DTO/EstudianteDTO";
export default interface IGestionEstudiantes
{
    /**
     * @route POST api/estudiantes
     * @param estudiante 
     */
    crearEstudiante(estudiante:EstudianteDTO):Promise<EstudianteDTO>;
    /**
     * @route PUT api/estudiantes/:cod
     * @param cod 
     * @param estudiante 
     */
    //*
    actualizarEstudiante(cod:number, estudiante:EstudianteDTO):Promise<EstudianteDTO>;
    /**
     * @route DELETE api/estudiantes/:cod
     * @param cod 
     */
    eliminarEstudiante(cod:number):Promise<boolean>;
    /**
     * @route GET api/estudiantes/:cod
     * @param cod 
     */
    consultarEstudiante(cod:number):Promise<EstudianteDTO>;
    /**
     * @route GET api/estudiantes
     */
    consultarEstudiantes():Promise<EstudianteDTO[]>;

    consultarEstudiantesPorProceso(id:number):Promise<EstudianteDTO[]>
}