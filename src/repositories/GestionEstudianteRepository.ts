import db from '../database/Database';
import EstudianteEntity from '../models/EstudianteEntity';
import { query } from 'express';
export default class GestionEstudianteRepository{
    public constructor()
    {
    }
    
    
    async actualizarEstudiante(cod:number, estudiante:EstudianteEntity):Promise<EstudianteEntity[]>
    {
        const  query1 = "update estudiante set est_codigo = ?,  prc_id = ?, est_nombre = ?, est_correo = ? where est_codigo = ?";
       // const query2="update PROCESO set est_codigo = ? WHERE est_codigo = ?";
        const query4 = "select * FROM estudiante WHERE est_codigo = ?";
        const est:EstudianteEntity = new EstudianteEntity(estudiante.est_codigo, estudiante.prc_id, estudiante.est_nombre, estudiante.est_correo);
        const res:EstudianteEntity[] = [];
        try{
            const [result1]:any = await db.query(query1, [est.est_codigo, est.prc_id, est.est_nombre, est.est_correo,cod]);
            if(result1.affectedRows == 0){
                return res;
            }
         //   await  db.query(query2,[est.est_codigo,cod]);
            const [result2]:EstudianteEntity|any = await db.query(query4,[est.est_codigo]);
            result2.map((row:EstudianteEntity)=>{
                res.push(row);}
                )
        }catch(error)
        {
            return res;
        }
        return res;
        
    }
    
    
    async consultarEstudiante(cod:number):Promise<EstudianteEntity[]>{
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