import RevisionADTO from "../DTO/RevisionADTO";

export default interface IGestionarAnteproyecto
{
    
    /**
     * 
     * @param id 
     * 
     */
    descargarAnteproyecto(id:number):Promise<string | null>;

    //falta upload

    cargarAnteproyecto(id:number,ruta:string,nombre:string):Promise<boolean>;



}