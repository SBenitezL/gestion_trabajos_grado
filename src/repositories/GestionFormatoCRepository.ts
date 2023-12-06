import FormatoCEntity from "../models/FormatoCEntity";
import IGestionFormatoCRepository from "./IGestionFormatoCRepository";
import db from "../database/Database";
export default class GestionFormatoCRepositoryImpl implements IGestionFormatoCRepository{
    async crearFormatoC(id: number, formatoC: FormatoCEntity, usr: number): Promise<FormatoCEntity> {
        //cambiar bd id del tic auto incrementable
        const query1="INSERT INTO TI_C VALUES(null,?,?,?,?,?,?,?,?);";
        const query2 = "Update proceso set c_id = ?, prc_form_c = 1 where prc_id = ?";
        const query3 = "SELECT *  FROM TI_C WHERE c_id = ?";
        try{            
            const [result]:any = await db.query(query1,[formatoC.C_DESARROLLO,formatoC.C_ESTRUCTURA,formatoC.C_CON_COMITE,formatoC.C_CON_DEPTO,new Date(),formatoC.C_OBSERVACIONES,formatoC.C_NO_REVISIONES,new Date()]);
            if(result.insertId>0)
            {
                await db.query(query2,[result.insertId,id]);
                const [res]:FormatoCEntity[]|any = await db.query(query3,[result.insertId]);
                console.log(res[0]);
                return res[0];
            }
           
        }catch(error)
        {
            console.log("errorcito")
        }
        formatoC.c_ID = -1;
        return formatoC;
        
        
    }
   
    async consultarFormatoC(prcId: number): Promise<FormatoCEntity> {
        const query = "select * from ti_c where c_id = ?";
        try{
            const [res]:FormatoCEntity[]|any = await db.query(query,[prcId]);
            return res[0];

        }catch{

        }
        return new FormatoCEntity(-3,"",1,1,1,new Date(),"",1,new Date());
   
    }
    async descargarFormatoC(id: number): Promise<string | null> {
        const query = "SELECT ru.ARC_RUTA AS RUTA FROM ARCHIVOS ru INNER JOIN TI_C tb ON ru.C_ID = tb.C_ID INNER JOIN PROCESO pr ON pr.C_ID = tb.C_ID INNER JOIN ESTUDIANTE ES ON pr.PRC_ID = es.PRC_ID WHERE es.EST_CODIGO=?; ";
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
    async verificarUsuario(usr: number): Promise<boolean> {
        const query = "Select usr_codigo, rol_id from usuariorol where usr_codigo = ? and rol_id = 3";
        try{
            const [res]:any = await db.query(query,[usr]);
            return res.length > 0;
        }catch(error)
        {
            return false;
        }
    }
    async verificarFormato(usr: number, id: number): Promise<boolean> {
        const query = "select * from TI_C c INNER JOIN proceso p ON c.C_ID = p.C_ID where prc_id = ? and usr_codigo = ?";
        try{
            const res = await db.query(query,[id,usr]);
            return await res.length > 0
        }catch
        {   
            return false;
        }
    }
    async recuperarIdC(id: number, usr: number): Promise<number | undefined> {
        const query = "select c_idfrom TI_C c INNER JOIN proceso p ON c.C_ID = p.C_ID where prc_id = ? and usr_codigo = ?";
        try
        {
            const [res]:any = await db.query(query,[id, usr]);
            if(res.length < 1) return 0;
            return res[0].b_id;
        }catch{
        }
        return 0;
    }
    async enviarFormC(id: number): Promise<boolean> {
        const query = "UPDATE proceso set prc_form_c = 2 where c_id = ?";
        try{
            const res = await db.query(query,[id]);
            return await res.length > 0
        }catch
        {   
            return false;
        }
    }
    public async existeRuta(id:number):Promise<boolean>
    {
        const query = "select * from archivos where c_id = ?";
        try{
            const [res]:any = await db.query(query,[id]);
            return res.length == 1;
        }catch(error){
            console.log(error)
            return false;
        }
    }
    public async crearRuta(id:number, ruta:string):Promise<boolean>
    {
        const query = "insert into archivos(c_id,arc_ruta,arc_recibido) values (?,?,?)"
        try{
            const [res]:any = await db.query(query,[id,ruta, new Date()]);
            return res.affectedRows == 1
        }catch{
            return false;
        }
    }   
    public async actualizarRuta(id:number, ruta:string):Promise<void>{
        const query = "update archivos set arc_ruta = ?, arc_recibido = ? where c_id = ?";
        try{
            await db.query(query,[ruta, new Date(), id]);
        }catch{
            console.log("error actualizar ruta");
        }
    }
    
}