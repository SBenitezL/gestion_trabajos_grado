import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
export default class GestionComentariosTIARepository
{
    public constructor()
    {
    }

    public async descargarComentariosFormA(id:number):Promise<string | null>{
        const query = "SELECT a.ANX_SRC AS RUTA FROM ANEXOS a INNER JOIN PROCESO p ON a.PRC_ID = p.PRC_ID INNER JOIN ESTUDIANTE e ON e.PRC_ID = p.PRC_ID WHERE e.EST_CODIGO=? AND a.TD_ID=2 ORDER BY a.ANX_RECIBIDO DESC LIMIT 1;";
        
        try{
            const [res]:any =await db.query(query,[id]);
           const ruta=res[0]?.RUTA ||null;
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
    public async  cargarComentariosFormA(id: number,ruta:string,nombre:string):Promise<boolean>{
        const query="INSERT INTO ANEXOS (TD_ID,PRC_ID,ANX_RECIBIDO,ANX_SRC) VALUES(2,?,?,?);";
        try{
              console.log("id de carga",id);
                const [res2]:any =await db.query(query,[id,new Date(),ruta]);
                return true;
        }catch{
            console.log("error carga de archivos");
            return false;
        }
    }
}
