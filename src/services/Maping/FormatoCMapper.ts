import FormatoCDTO from "../DTO/FormatoCDTO";
import FormatoCEntity from "../../models/FormatoCEntity";
export default class FormatoCMapper
{
    public entityToDTO(objEntity:FormatoCEntity):FormatoCDTO{
        return new FormatoCDTO(objEntity.C_ID,objEntity.C_DESARROLLO,objEntity.C_ESTRUCTURA,objEntity.C_CON_COMITE,objEntity.C_CON_DEPTO,objEntity.C_RECIBIDO,objEntity.C_OBSERVACIONES,objEntity.C_NO_REVISIONES,objEntity.C_REVISION);
    }
    public dtoToEntity(objDTO:FormatoCDTO): FormatoCEntity
    {
        return new FormatoCEntity(objDTO.id,objDTO.desarrollo,objDTO.estructura,objDTO.con_comite,objDTO.con_depto,objDTO.recibido,objDTO.observaciones,objDTO.no_revisiones,objDTO.revision);
       
    }
}