
import db from "../database/Database"
import RevisionAEntity from "../models/RevisionAEntity";
export default class ConsejoRepository
{
    async verificarUsuario(usuarioId:number):Promise<number>{
        const query = "select * from usuariorol where usr_codigo = ? and rol_id = ? and fechafin is null";
        try{
            const [res]:any[] = await db.query(query,[usuarioId,4]);
            return res.length
        }catch  
        {
            console.log("error verificando usuario");
        }
        return 0;
    }
    public async listarFormatosA(): Promise<RevisionAEntity[]> {
        const query = "call ConsultarRevisionAConsejo()";
        const res:RevisionAEntity[] = []
        try{
            const [result]:RevisionAEntity|any = await db.query(query);
            console.log(result);
            result[0].map((row:RevisionAEntity)=>{
                res.push(row);
            })
            console.log(result);
        }catch(error)
        {
        }
        return res;
    }
    
}