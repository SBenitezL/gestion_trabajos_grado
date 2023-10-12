import EstudianteDTO from "../DTO/EstudianteDTO";
import EstudianteEntity from "../../models/EstudianteEntity";

export default class EstudianteMapper
{
    public dtoToEntity(estudianteDTO:EstudianteDTO):EstudianteEntity
    {
        return new EstudianteEntity(estudianteDTO.codigo,estudianteDTO.proceso,estudianteDTO.nombre, estudianteDTO.correo);
    }
    public entityToDTO(estudianteEntity:EstudianteEntity):EstudianteDTO
    {
        return new EstudianteDTO(estudianteEntity.est_codigo, estudianteEntity.prc_id, estudianteEntity.est_nombre, estudianteEntity.est_correo);
    }
    public dtosToEntities(estudiantesDTO:EstudianteDTO[]):EstudianteEntity[]
    {
        const estudiantes:EstudianteEntity[] = [];
        estudiantesDTO.forEach((row=>
            {
                estudiantes.push(new EstudianteEntity(row.codigo,row.proceso,row.nombre,row.correo));
            }))
        return estudiantes;
    }

    public entitiesToDTOs(estudiantesDTO:EstudianteEntity[]):EstudianteDTO[]
    {
        const estudiantes:EstudianteDTO[] = [];
        estudiantesDTO.forEach((row=>
            {
                estudiantes.push(new EstudianteDTO(row.est_codigo,row.prc_id,row.est_nombre,row.est_correo));
            }))
        return estudiantes;
    }
}