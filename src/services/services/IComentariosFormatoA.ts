export default interface IComentariosFormatoA{

  /**
* 
* @param id 
* 
*/
descargarComentariosFormA(id:number):Promise<string | null>;

//falta upload

cargarComentariosFormA(id:number,ruta:string,nombre:string):Promise<boolean>;
}