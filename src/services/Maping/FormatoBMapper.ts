import FormatoBDTO from "../DTO/FormatoBDTO";
import FormatoBEntity from "../../models/FormatoBEntity";

export default class FormatoBMapper
{
    public entityToDTO(objEntity:FormatoBEntity):FormatoBDTO{
        return new FormatoBDTO(objEntity.B_ID,objEntity.B_APORTES,objEntity.B_OBJETIVOS,objEntity.B_METODOLOGIA, objEntity.B_ENTREGA, objEntity.B_ESTRUCTURA, objEntity.B_CRONOGRAMA, objEntity.B_PATROCINIO,objEntity.B_CONCEPTO, objEntity.B_RECIBIDO, objEntity.B_OBSERVACIONES, objEntity.B_NO_REVISIONES, objEntity.B_REVISION);
    }
    public dtoToEntity(objDTO:FormatoBDTO): FormatoBEntity
    {
        return new FormatoBEntity(objDTO.id,objDTO.aportes,objDTO.objetivos,objDTO.metodologia,objDTO.entrega,objDTO.estructura,objDTO.cronograma,objDTO.patrocinio,objDTO.concepto,objDTO.recibido,objDTO.observaciones,objDTO.no_revisiones,objDTO.revision);
       
    }
    public jsonToDTO(json:any):FormatoBDTO
    {   
        throw new Error("Method not implemented.");
       
    }
}