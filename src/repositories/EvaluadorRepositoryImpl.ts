import EvaluadorEntity from "../models/EvaluadorEntity";
import IEvaluadorRepository from "./IEvaluadorRepositoyry";
import db from "../database/Database";
import RevisionAEntity from "../models/RevisionAEntity";


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
        console.log("asignarEvaluador()")
        const query = "insert into evaluarfacultad values(?,?)";
        const query2 = 'select usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo from usuario join evaluarfacultad on (usuario.usr_codigo = evaluarfacultad.USR_CODIGO) where evaluarfacultad.PRC_ID = ?';
        const cancelar = "delete from evaluarfacultad where prc_id = ? and usr_codigo = ?"
        const res:EvaluadorEntity[] = [];
        try{
            let pDelete:any;
            let borrados = [];
            const insert:any = []
            const pInsert = evaluadores.map(async evaluador =>{
                insert.push(await db.query(query, [evaluador.usr_codigo, id]));
            });
            console.log();
            await Promise.all(pInsert);
            insert.forEach((row:any) =>{
                if(row.affectedRows == 0){
                    pDelete = evaluadores.map(async evaluador =>{
                            borrados.push(await db.query(cancelar, [id, evaluador.usr_codigo]));
                        });
                }
            })
            if(borrados.length > 0) await Promise.all(pDelete);
            else{
                const [result]:any = await db.query(query2,[id]);
                console.log(result) 
                result.map((row:EvaluadorEntity) =>{
                    res.push(new EvaluadorEntity(row.usr_codigo, row.usr_nombre, row.usr_correo));
                })
            }

        }catch{

        }
        return res;
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

    public async listarAnteproyectos(id:number): Promise<RevisionAEntity[]> {
        const query = "call ConsultarRevisionAEvaluadores(?)";
        const res:RevisionAEntity[] = []
        try{
            const [result]:RevisionAEntity|any = await db.query(query, [id]);
            console.log(result);
            result[0].map((row:RevisionAEntity)=>{
                res.push(row);
            })
            console.log(result);
        }catch(error)
        {
        }
        return res;
    }
    async verificarUsuario(usuarioId:number):Promise<number>{
        const query = "select * from usuariorol where usr_codigo = ? and (rol_id = ? or rol_id = ?) and fechafin is null";
        try{
            const [res]:any[] = await db.query(query,[usuarioId,4,5]);
            return res.length
        }catch  
        {
            console.log("error verificando usuario");
        }
        return 0;
    }
    
}