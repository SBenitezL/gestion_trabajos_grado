import IGestionarAnteproyecto from "./IGestionarAnteproyecto";
import GestionAnteproyectoRepository from "../../repositories/GestionAnteproyectoRepository";
//todo
class GestionAnteproyectoImpl implements IGestionarAnteproyecto{
    //todo
    private accesoPersistencia:GestionAnteproyectoRepository;

    public constructor(){
        //todo
        this.accesoPersistencia = new GestionAnteproyectoRepository();
    }
    async cargarAnteproyecto(id: number,ruta:string,nombre:string):Promise<boolean> {
        return await this.accesoPersistencia.cargarAnteproyecto(id,ruta,nombre);
    }
    async descargarAnteproyecto(id: number): Promise<string | null> {
        return await this.accesoPersistencia.descargarAnteproyecto(id);
    }
    
    
}
const gestionAnteproyectoImpl = new GestionAnteproyectoImpl();
export default gestionAnteproyectoImpl;