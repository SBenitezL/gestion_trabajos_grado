import FormatoBEntity from "../models/FormatoBEntity";
import IGestionFormatoBRepository from "./IGestionFormatoBRepository";
import db from "../database/Database";

export default class GestionFormatoBRepositoryImpl implements IGestionFormatoBRepository{


    async enviarFormB(id: number): Promise<boolean> {
        const query = "UPDATE b_proceso set b_prc_estado = 2 where b_id = ?";
        try{
            const res = await db.query(query,[id]);
            return await res.length > 0
        }catch
        {   
            return false;
        }
    }
    async verificarFormato(usr: number, id: number): Promise<boolean> {
        const query = "select * from b_proceso where prc_id = ? and usr_codigo = ?";
        try{
            const res = await db.query(query,[id,usr]);
            return await res.length > 0
        }catch
        {   
            return false;
        }
    }
    async verificarUsuario(usr: number): Promise<boolean> {
        const query = "Select usr_codigo, rol_id from usuariorol where usr_codigo = ? and rol_id = 4";
        try{
            const [res]:any = await db.query(query,[usr]);
            return res.length > 0;
        }catch(error)
        {
            return false;
        }
    }
    async crearFormatoB(id: number, formatoB: FormatoBEntity, usr:number): Promise<FormatoBEntity> {
        const query = "insert into ti_b values (null,?,?,?,?,?,?,?,?,?,?,?,?)";
        const query2 = "INSERT INTO b_proceso (b_id, prc_id, b_prc_estado, usr_codigo)values (?,?,?,?)";
        const query3 = "select * from ti_b where b_id = ?";
        try{
            const [resInsert]:any = await db.query(query, [formatoB.B_APORTES,formatoB.B_OBJETIVOS,formatoB.B_METODOLOGIA, formatoB.B_ENTREGA, formatoB.B_ESTRUCTURA, formatoB.B_CRONOGRAMA, formatoB.B_PATROCINIO,formatoB.B_CONCEPTO, new Date(), formatoB.B_OBSERVACIONES, formatoB.B_NO_REVISIONES, new Date()]);
            console.log(resInsert);
            console.log(resInsert.insertId); 
            console.log("pasa")
            if(resInsert.insertId > 0)
            {
                await db.query(query2,[resInsert.insertId,id, formatoB.B_CONCEPTO, usr]);
                const [res]:FormatoBEntity[]|any = await db.query(query3,[resInsert.insertId]);
                console.log(res[0]);
                return res[0];
            }
        }catch{
            console.log("errorcito")
        }
        formatoB.B_ID = -1;
        return formatoB;
    }
    async actualizarFormatoB(id: number, formatoB: FormatoBEntity): Promise<FormatoBEntity> {
        const query = "update ti_b set  UPDATE tu_tabla SET aportes = ?, objetivos = ?,metodologia = ?,entrega = ?,estructura = ?,cronograma = ?, patrocinio = ?, concepto = ?, recibido = ?, observaciones = ? WHERE id = ?";
        const query2 = "select * from ti_b where b_id = ?";
        try{
            const [update]:any = await db.query(query, [formatoB.B_APORTES,formatoB.B_OBJETIVOS, formatoB.B_METODOLOGIA, formatoB.B_ENTREGA, formatoB.B_ESTRUCTURA, formatoB.B_CRONOGRAMA, formatoB.B_PATROCINIO, formatoB.B_CONCEPTO, new Date(), formatoB.B_OBSERVACIONES, new Date(), id]);
            if(update.affectedRows==1){
                const [res]:FormatoBEntity[]|any = await db.query(query2,[id]);
                console.log(res[0]);
                return res[0];
            }
        }catch{
        }
        formatoB.B_ID = -1;
        return formatoB;
    }
    async eliminarFormatoB(id: number): Promise<boolean> {
        const query = "delete from b_proceso where b_id = ?";
        const query2 = "delete from ti_b where b_id = ?"
        try{
            const [res]:any = await db.query(query, [id]);
            if(res.affectedRows > 0){
                const [result]:any = await db.query(query,[id]);
                return result.affectedRows > 0
            }
        }catch{
        }
        return false;
    }
    async consultarFormatoB(prcId: number): Promise<FormatoBEntity> {
        const query = "select * from ti_b where b_id = ?";
        try{
            const [res]:FormatoBEntity[]|any = await db.query(query,[prcId]);
            return res[0];

        }catch{

        }
        return new FormatoBEntity(-3,1,1,1,1,1,1,1,1,new Date(),"",1,new Date());
    }
    public async descargarFormatoB(id: number): Promise<string[] | null> {
        const query = "SELECT ru.ARC_RUTA AS RUTA FROM ARCHIVOS ru INNER JOIN TI_B tb ON ru.B_ID = tb.B_ID INNER JOIN PROCESO pr ON pr.B_ID = tb.B_ID INNER JOIN ESTUDIANTE ES ON pr.PRC_ID = es.PRC_ID WHERE es.EST_CODIGO=?; ";
        
        try{
            const [res]:any =await db.query(query,[id]);
           const ruta=res[0]?.RUTA ||null;
           console.log("intento",id);
           if (ruta) {
            console.log(ruta);
            return ruta;
          } else {
            console.log('Ruta no encontrada para el ID:', id);
            return null;
          }
        }catch{
            console.log("error  ruta");
            return null;
        }
    }
    async recuperarIdB(id:number, usr:number):Promise<number|undefined>{
        const query = "select b_id from b_proceso where prc_id = ? and usr_codigo = ?";
        try
        {
            const [res]:any = await db.query(query,[id, usr]);
            if(res.length < 1) return 0;
            return res[0].b_id;
        }catch{
        }
        return 0;
    }
    
}
