import FormatoADTO from "../DTO/FormatoADTO";
import FormatoAEntity from "../../models/FormatoAEntity";
export default class FormatoAMapper{
    public constructor(){

    }
    public entityToDTO(objEntity:FormatoAEntity[]):FormatoADTO{
        var form:FormatoADTO = new FormatoADTO(0,"","","","","",false,new Date(),new Date(),"",0,"");
        objEntity.forEach((row)=>{
            if(form.id!= row.a_id)
            {
               form.id = row.a_id;
               form.objetivos = row.a_objetivos;
               form.con_entrega = row.a_con_entrega;
               form.realizacion = row.a_realizacion;
               form.recursos = row.a_recursos;
               form.financiacion = row.a_financiacion;
               form.per_programa = row.a_per_programa;
               form.revision = row.a_revision;
               form.recibido = row.a_recibido;
               form.observaciones = row.a_observaciones;
               form.no_revision = row.a_no_revision;
               form.interes = row.a_interes;
            }
            
        })
       return form;
    }
    public dtoToEntity(objDTO:FormatoADTO): FormatoAEntity[]
    {
        //revisar 
        var form:FormatoAEntity[] = [];
           form.push (new FormatoAEntity(
                objDTO.id,
                objDTO.objetivos,
                objDTO.con_entrega,
                objDTO.realizacion,
                objDTO.recursos,
                objDTO.financiacion,
                objDTO.per_programa,
                objDTO.revision,
                objDTO.recibido,
                objDTO.observaciones,
                objDTO.no_revision,
                objDTO.interes
                ))
            
        return form;
    }
    public jsonToDTO(json:any):FormatoADTO
    {   
        //TODO tipo date
        const form = new FormatoADTO(
            parseInt(json._id),
            json._objetivos,
            json._con_entrega,
            json._realizacion,
            json._recursos,
            json._financiacion,
            json._per_programa,
            json._revision,
            json._recibido,
            json._observaciones,
            json._no_revision,
            json._interes
        );

        return form;
    }

}