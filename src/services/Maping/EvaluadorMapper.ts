import EvaluadorEntity from "../../models/EvaluadorEntity";
import EvaluadorDTO from "../DTO/EvaluadorDTO";

export default class EvaluadorMapper{

    public dtoToEntity(obj:EvaluadorDTO):EvaluadorEntity|null{
        if(obj){
            return new EvaluadorEntity(obj.codigo,obj.nombre, obj.correo);
        }
        return null;
    }
    public entityToDTO(obj:EvaluadorEntity):EvaluadorDTO|null{
        if(obj){
            return new EvaluadorDTO(obj.usr_codigo,obj.usr_nombre, obj.usr_correo);
        }
        return null;
    }
    public entitiesToDTOS(list:EvaluadorEntity[]):EvaluadorDTO[]
    {
        const res:EvaluadorDTO[] = []
        for(const obj of list)
        {
            const dto = this.entityToDTO(obj);
            if(dto) res.push(dto);
        }
        return res;
    }
    public dtosToEntities(list:EvaluadorDTO[]): EvaluadorEntity[]
    {
        const res:EvaluadorEntity[] = []
        for(const obj of list)
        {
            const entity = this.dtoToEntity(obj);
            if(entity) res.push(entity);
        }
        return res;
    }
}