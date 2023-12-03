import db from "../database/Database";
export default class CoordinacionRepository{
    async verificarUsuario(usuarioId:number):Promise<number>{
        const query = "select * from usuariorol where usr_codigo = ? and rol_id = ? and fechafin is null";
        try{
            const [res]:any[] = await db.query(query,[usuarioId,5]);
            return res.length
        }catch  
        {
            console.log("error verificando usuario");
        }
        return 0;
    }
    async rechazarFormtoA(prc:number){
        const query ="update proceso set prc_form_a = -1 where prc_id = ?";
    }
}