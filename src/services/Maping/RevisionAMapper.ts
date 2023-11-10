import RevisionADTO from "../DTO/RevisionADTO";
import RevisionAEntity from "../../models/RevisionAEntity";
import EstudianteBasicoDTO from "../DTO/EstudianteBasicoDTO";
export default class RevisionAMapper
{
    public constructor(){

    }
    public listEntityToDTO(revisionA:RevisionAEntity[]):RevisionADTO[]
    {
        const list:RevisionADTO[]=[];
        revisionA .forEach((row)=>{
            let reviA=list.find((dto)=> dto.id==row.prc_id);
            if(!reviA){
                list.push({id:row.prc_id,tipo:row.prc_tipo,titulo:row.prc_titulo,estudiantes:[],estado:row.fA_estado,no_revision:row.fA_revisiones})
                reviA =list[list.length-1];
            }
            reviA.estudiantes.push({codigo:row.est_codigo,nombre:row.est_nombre})
        })      

        return list;
    }
   
    public dtoToEntity(revisionA:RevisionADTO):RevisionAEntity[]
    {
        var revA : RevisionAEntity[]=[];
        revisionA.estudiantes.forEach((row)=>{
            revA.push(new RevisionAEntity(revisionA.id,revisionA.tipo, revisionA.titulo, row.codigo,row.nombre,revisionA.estado, revisionA.no_revision));
        })
        return revA;
        
    }
    public entityToDTO(revsionA:RevisionAEntity[]):RevisionADTO
    {
        var revDTO:RevisionADTO={id: 0,tipo:"",titulo:"",estudiantes:[],estado:0,no_revision:0}; 
        revsionA.forEach((row)=>{
            if(revDTO.id!=row.prc_id){
                revDTO.id=row.prc_id;
                revDTO.tipo=row.prc_tipo;
                revDTO.titulo=row.prc_titulo;
                revDTO.estudiantes=[];
                revDTO.estado=row.fA_estado;
                revDTO.no_revision=row.fA_revisiones;

            }
            revDTO.estudiantes.push({codigo: row.est_codigo,nombre:row.est_nombre});
        } )
        
        return revDTO;
    }
}