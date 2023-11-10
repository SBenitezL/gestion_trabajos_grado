import RevisionADTO from "../DTO/RevisionADTO";
import RevisionAEntity from "../../models/RevisionAEntity";
import EstudianteBasicoDTO from "../DTO/EstudianteBasicoDTO";
export default class RevisionAMapper
{
    public constructor(){

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