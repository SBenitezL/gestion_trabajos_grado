import EvaluadorEntity from "../models/EvaluadorEntity";
import IEvaluadorRepository from "./IEvaluadorRepositoyry";
import db from "../database/Database";


export default class EvaluadorRepositoryImpl implements IEvaluadorRepository{
    async verificarAsignados(prc: number): Promise<EvaluadorEntity[]> {
        const query = "call verificarAsignados(?)";
        const res:EvaluadorEntity[] = []
        try{
            const [result]:any[] = await db.query(query,[prc])
            result[0].map((row:EvaluadorEntity)=>{
                res.push(row)
            })
        }catch{
            console.error("Error en verificarAsignados Repo")
        }
        return res;
    }
    async verificarEvaluador(ev1: number, ev2: number): Promise<EvaluadorEntity[]> {
        const query = "call verificarEvaluadores(?,?)";
        const res:EvaluadorEntity[] = [];
        try{
            const [result]:any = await db.query(query,[ev1,ev2]);
            result[0].map((row:EvaluadorEntity)=>{
                res.push(row);
            })
        }catch{
            console.log("error verificarEvaluadores");
        }
        return res;
    }
    async asignarEvaluador(id: number, evaluadores: EvaluadorEntity[]): Promise<EvaluadorEntity[]> {
        const query = "insert into evaluarfacultad values(?,?)";
        const query2 = 'select usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo from usuario join evaluarfacultad on (usuario.usr_codigo = evaluarfacultad.USR_CODIGO) where evaluarfacultad.PRC_ID = ?';
        try{
            await db.query(query,[evaluadores[0].usr_codigo, id]);
            await db.query(query,[evaluadores[1].usr_codigo]);
            

        }catch{

        }
        throw new Error("Method not implemented.");
    }
    eliminarEvaluador(id: number, evaluador: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<EvaluadorEntity[]> {
        const query = "call recuperarEvaluadores()";
        const res:EvaluadorEntity[] = []
        try{
            const [result]:EvaluadorEntity[]|any = await db.query(query);
            result[0].map( (row:EvaluadorEntity)=>{
                res.push(row);
            });
            return res;
        }catch{
        }
        return res;
    }
    findOne(id: number): Promise<EvaluadorEntity[]> {
        throw new Error("Method not implemented.");
    }
    
}