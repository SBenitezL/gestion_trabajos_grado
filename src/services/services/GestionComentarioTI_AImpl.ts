import IComentariosFormatoA from "./IComentariosFormatoA";
import GestionComentariosTIARepository from "../../repositories/GestionComentariosTIARepository";

class GestionComentariosTIAImpl implements IComentariosFormatoA{
    private accesoPersistencia:GestionComentariosTIARepository;
    public constructor(){
        //todo
        this.accesoPersistencia = new GestionComentariosTIARepository();
    }
    async descargarComentariosFormA(id: number): Promise<string | null> {
        return await this.accesoPersistencia.descargarComentariosFormA(id);
    }
    async cargarComentariosFormA(id: number, ruta: string, nombre: string): Promise<boolean> {
        return await this.accesoPersistencia.cargarComentariosFormA(id,ruta,nombre);
    }
    
}
const gestionComentarioImpl = new GestionComentariosTIAImpl();
export default gestionComentarioImpl;