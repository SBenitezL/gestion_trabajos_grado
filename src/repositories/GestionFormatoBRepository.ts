import FormatoBEntity from "../models/FormatoBEntity";
import IGestionFormatoBRepository from "./IGestionFormatoBRepository";
import db from "../database/Database";

export default class GestionFormatoBRepositoryImpl implements IGestionFormatoBRepository{
    async crearFormatoB(id: number, formatoB: FormatoBEntity): Promise<FormatoBEntity> {
        const query = "insert into ti_b values (null,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const query2 = "update proceso set b_id = ? where prc_id = ?";
        const query3 = "select * from ti_b where b_id = ?";
        try{
            const resInsert = await db.query(query, [formatoB.B_ID,formatoB.B_APORTES,formatoB.B_OBJETIVOS,formatoB.B_METODOLOGIA, formatoB.B_ENTREGA, formatoB.B_ESTRUCTURA, formatoB.B_CRONOGRAMA, formatoB.B_PATROCINIO,formatoB.B_CONCEPTO, formatoB.B_RECIBIDO, formatoB.B_OBSERVACIONES, formatoB.B_NO_REVISIONES, formatoB.B_REVISION]);
            console.log(resInsert);
            
        }catch{
            console.log("holita");
        }
        //throw new Error("Method not implemented.");
        return formatoB;
    }
    actualizatFormatoB(id: number, formatoB: FormatoBEntity): Promise<FormatoBEntity> {
        throw new Error("Method not implemented.");
    }
    eliminarFormatoB(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    consultarFormatoB(prcId: number): Promise<FormatoBEntity> {
        throw new Error("Method not implemented.");
    }
    public async descargarFormatoB(id: number): Promise<string | null> {
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
    
}
