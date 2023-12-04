import FormatoBDTO from "../DTO/FormatoBDTO";
import FormatoBEntity from "../../models/FormatoBEntity";

export default class FormatoBMapper
{
    public entityToDTO(objEntity:FormatoBEntity[]):FormatoBDTO{
        throw new Error("Method not implemented.");

    }
    public dtoToEntity(objDTO:FormatoBDTO): FormatoBEntity[]
    {
        throw new Error("Method not implemented.");

       
    }
    public jsonToDTO(json:any):FormatoBDTO
    {   
        throw new Error("Method not implemented.");
       
    }
}