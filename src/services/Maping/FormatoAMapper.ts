import FormatoADTO from "../DTO/FormatoADTO";
import FormatoAEntity from "../../models/FormatoAEntity";
export default class FormatoAMapper{
    public constructor(){

    }
    public entityToDTO(objEntity:FormatoAEntity[]):FormatoADTO{
        var form:FormatoADTO = new FormatoADTO(0,"","","","","",false,new Date(),new Date(),"",0);
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
            }
            
        })
       return form;
    }
   /* public dtoToEntity(objDTO:FormatoAEntity): FormatoAEntity[]
    {
        var form:FormatoAEntity[] = [];
        
    }*/

}