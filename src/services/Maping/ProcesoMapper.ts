import ProcesoEntity from "../../models/ProcesoEntity";
import ProcesoListEntity from "../../models/ProcesoListEntity";
import ProcesoDTO from "../DTO/ProcesoDTO";
import ProcesoListDTO from "../DTO/ProcesoListDTO";

export default  class ProcesoMapper
{
    public listEntityToDTO(proceso:ProcesoListEntity[]):ProcesoListDTO[]
    {
        const list:ProcesoListDTO[]=[];
        proceso.forEach((row)=>
        {
            let prc = list.find((dto)=> dto.id == row.prc_id);
            if(!prc)
            {
                list.push(new ProcesoListDTO(row.prc_id,row.prc_titulo, row.prc_tipo,[]));
                prc = list[list.length-1];
            }
            prc.estudiantes.push(row.est_nombre);
        })
        return list;
    }
    public dtoToEntity(proceso:ProcesoDTO):ProcesoEntity
    {
        const entity:ProcesoEntity = new ProcesoEntity(proceso.id, proceso.usuario, proceso.fa, proceso.fb, proceso.fc, proceso.ase, proceso.status_a, proceso.status_b, proceso.status_c, proceso.titulo, proceso.tipo);
        return entity;
    }
    public entityToDTO(proceso:ProcesoEntity):ProcesoDTO
    {
        const dto:ProcesoDTO = new ProcesoDTO(proceso.prc_id, proceso.usr_codigo, proceso.a_id, proceso.b_id, proceso.c_id, proceso.ase_cc, proceso.prc_form_a, proceso.prc_form_b, proceso.prc_form_c, proceso.prc_titulo, proceso.prc_tipo);
        return dto;
    }
}
