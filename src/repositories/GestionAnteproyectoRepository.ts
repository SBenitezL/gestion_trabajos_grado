import { RowDataPacket } from 'mysql2';
import db from '../database/Database';
export default class GestionAnteproyectoRepository
{
    public constructor()
    {
    }

    public async descargarAnteproyecto(id:number):Promise<string | null>{
        const query = "SELECT a.ANX_SRC AS RUTA FROM ANEXOS a INNER JOIN PROCESO p ON a.PRC_ID = p.PRC_ID INNER JOIN ESTUDIANTE e ON e.PRC_ID = p.PRC_ID WHERE e.EST_CODIGO=? AND TD_ID=1 ORDER BY a.ANX_RECIBIDO DESC LIMIT 1;";
        
        try{
            const [res]:any =await db.query(query,[id]);
           const ruta=res[0]?.RUTA ||null;
           console.log("a ver",ruta)
           if (ruta) {
            console.log("ruta desde repos",ruta);
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
    public async  cargarAnteproyecto(id: number,ruta:string,nombre:string):Promise<boolean>{
        const query="INSERT INTO ANEXOS (TD_ID,PRC_ID,ANX_RECIBIDO,ANX_SRC) VALUES(1,?,?,?);";
        const query2="SELECT * FROM PROCESO WHERE PRC_ID=?;";
        try{
              console.log("id de carga",id);
              const [res]:any =await db.query(query2,[id]);
              
              if (res.length == 1) {
                const [res2]:any =await db.query(query,[id,new Date(),ruta]);
                return true;
            } else {
              console.log('No se encontro el proceso');
              return false;
            }
          
        }catch{
            console.log("error carga de archivos");
            return false;
        }
    }
}
