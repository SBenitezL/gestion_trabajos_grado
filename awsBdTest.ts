import { RowDataPacket } from 'mysql2';
import db from './src/database/Database'

console.log('WORKS');
const query = "insert into mi_tabla values (?,?)";
class MiTabla{
    constructor (public _id:number, public _texto:string)
    {
    }
    public get id():number{
        return this._id;
    }
    public get texto():string{
        return this._texto;
    }
    public set id(id:number)
    {
        this._id = id;
    }
    public set texto(texto:string)
    {
        this._texto = texto;
    }
}
async function prueba(id:number, texto:string){
    try{
        //const query = 'INSERT INTO mi_tabla (id, texto) VALUES (?, ?)';
        //const [result] = await db.query(query, [id, null]);
        const query2 = "SELECT * FROM `gestion-trabajo-grado`.Rol";
        const [result2]:MiTabla|any = await db.query(query2);
        const lista:MiTabla[] = [];
        result2.map((row:MiTabla)=>{
        lista.push(row);
    });
       // console.log('Registro insertado con éxito.', result);
        console.log(lista);
    }catch(error)
    {
        console.error("no se pudo");
        console.error(error);
    }
}
prueba(9,"hola");