import db from '../database/Database';
import EstudianteEntity from '../models/EstudianteEntity';
import { query } from 'express';
export default class GestionEstudianteRepository{
    public constructor()
    {
    }
    
    
   
    async actualizarEstudiante(cod: number, estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        const query1 = "update estudiante set est_codigo = ?, prc_id = ?, est_nombre = ?, est_correo = ? where est_codigo = ?";
        const query4 = "select * FROM estudiante WHERE est_codigo = ?";
        const est = new EstudianteEntity(estudiante.EST_CODIGO, estudiante.PRC_ID, estudiante.EST_NOMBRE, estudiante.EST_CORREO);
    
        try {
            const [result1]: any = await db.query(query1, [estudiante.EST_CODIGO, estudiante.PRC_ID, estudiante.EST_NOMBRE, estudiante.EST_CORREO, cod]);
            
            // obtener el registro actualizado
            const [result2]: EstudianteEntity[] | any = await db.query(query4, [estudiante.EST_CODIGO]);
            
            if (result1.affectedRows === 0) {
                return result2[0]; // Retorna el registro existente si no hubo cambios
            }
    
            return est; // Retorna el objeto estudiante actualizado
        } catch (error) {
            throw error; // Lanza una excepción en caso de error
        }
    }
    
    
    /*async consultarEstudiante(cod:number):Promise<EstudianteEntity[]>{
        const query = "select * FROM estudiante WHERE est_codigo = ?";
        const res:EstudianteEntity[] = []
        try{
            
            const [result]:EstudianteEntity|any  = await db.query(query, [cod]);
            result.map((row:EstudianteEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }*/

    async consultarEstudiante(cod: number): Promise<EstudianteEntity> {
        const query = "select * FROM estudiante WHERE est_codigo = ?";
        const res: EstudianteEntity = new EstudianteEntity(0,0,"",""); // Crear un objeto vacío
    
        try {
            const [result]: EstudianteEntity[] | any = await db.query(query, [cod]);
    
            if (result.length > 0) {
                return result[0]; // Devuelve el primer estudiante encontrado
            }
    
            return res; // Devuelve un objeto EstudianteEntity vacío si no se encontraron estudiantes con el código especificado
        } catch (error) {
            throw error; // Lanza una excepción en caso de error
        }
    }
    
    async consultarEstudiantes():Promise<EstudianteEntity[]>{
        const query = "select * FROM estudiante";
        const res:EstudianteEntity[] = []
        try{
            
            const [result]:EstudianteEntity|any  = await db.query(query);
            result.map((row:EstudianteEntity)=>{
                res.push(row);})
        }catch(error)
        {
            return res;
        }
        return res;
    }
}