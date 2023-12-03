import {Request, Response} from 'express';

import GestionConsejoImpl from "../services/services/GestionConsejoImpl";

class ConsejoController{
    private service:GestionConsejoImpl
    constructor(){
        this.service = new GestionConsejoImpl();
    }
    public list = async (req:Request,res:Response)=>{
        const {usuarioId} = req.params
        const result = await this.service.listarFormatosA(parseInt(usuarioId));
        if(result)
        {
            if(result.length>0)
                res.status(200).json(result);
            else    
                res.status(404).json({message:"No se encontraron registros"});
        }else{
            res.status(401).json({error:"Usuario sin acceso"});
        }
    }
}
const consejoController = new ConsejoController();
export default consejoController;