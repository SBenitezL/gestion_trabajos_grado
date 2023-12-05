import db from "../database/Database";
export default class CoordinacionRepository{
    async verificarUsuario(usuarioId:number):Promise<number>{
        const query = "select * from usuariorol where usr_codigo = ? and rol_id = ? and fechafin is null";
        try{
            const [res]:any[] = await db.query(query,[usuarioId,6]);
            return res.length
        }catch  
        {
            console.log("error verificando usuario");
        }
        return 0;
    }
    async rechazarFormtoA(prc:number, estado:number):Promise<number>{
        const query ="update proceso set prc_form_a = ? where prc_id = ?";
        try
        {
            const [res]:any = await db.query(query, [estado,prc]);
            return res.affectedRows;
        }catch
        {
            console.log("error rechazar repository")
        }
        return 0
    }
    async mermarRevisiones(prc:number):Promise<number>{
        const query = "update ti_a set A_NO_REVISION = A_NO_REVISION -1 where A_ID = (select A_ID from proceso where prc_id = ?)";
        try{
            const [res]:any = await db.query(query, [prc]);
            return res.affectedRows
        }catch{
            console.log("Error mermando no revisión")            
        }
        return 0
    }
}