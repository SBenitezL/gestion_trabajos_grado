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
        return new EstudianteDTO(estudianteEntity.EST_CODIGO, estudianteEntity.PRC_ID, estudianteEntity.EST_NOMBRE, estudianteEntity.EST_CORREO);
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
                estudiantes.push(new EstudianteDTO(row.EST_CODIGO, row.PRC_ID, row.EST_NOMBRE, row.EST_CORREO));
            }))
        return estudiantes;
    }
}