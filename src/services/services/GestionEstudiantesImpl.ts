import EstudianteDTO from "../DTO/EstudianteDTO";
import IGestionEstudiantes from "./IGestionEstudiantes";
import EstudianteEntity from "../../models/EstudianteEntity";
import EstudianteMapper from "../Maping/EstudianteMapper";
import GestionEstudianteRepository from "../../repositories/GestionEstudianteRepository"; 

export default class GestionEstudiantes implements IGestionEstudiantes{
    private accesoPersistencia:GestionEstudianteRepository;
    private mapper:EstudianteMapper;
    public constructor(){
        this.accesoPersistencia = new GestionEstudianteRepository();
        this.mapper = new EstudianteMapper();
    }
    consultarEstudiantesPorProceso(id: number): Promise<EstudianteDTO[]> {
        throw new Error("Method not implemented.");
    }
   
    public async crearEstudiante(estudiante: EstudianteDTO): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");
    }
    public async actualizarEstudiante(cod: number, estudiante: EstudianteDTO): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");

    }
    public async eliminarEstudiante(cod: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async consultarEstudiante(cod: number): Promise<EstudianteDTO> {
        throw new Error("Method not implemented.");

    }
    public async consultarEstudiantes(): Promise<EstudianteDTO[]> {
        const res= await this.accesoPersistencia.consultarEstudiantes();
        return this.mapper.entitiesToDTOs(res);
    }
    /**private existeEstudiante(cod:number):boolean
    {

    }**/
}