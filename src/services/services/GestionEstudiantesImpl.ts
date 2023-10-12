import EstudianteDTO from "../DTO/EstudianteDTO";
import IGestionEstudiantes from "./IGestionEstudiantes";

export default class GestionEstudiantes implements IGestionEstudiantes{
    public async crearEstudiante(estudiante: EstudianteDTO): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");
    }
    public async actualizarEstudiante(cod: number, estudiante: EstudianteDTO): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");
    }
    public async eliminarEstudiante(cod: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async consultarEstudiante(cod: number): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");
    }
    public async consultarEstudiantes(): Promise<EstudianteDTO[]> {
        throw new Error("Method not implemented.");
    }
    /**private existeEstudiante(cod:number):boolean
    {

    }**/
}