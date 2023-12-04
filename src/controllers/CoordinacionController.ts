import {Request, Response} from 'express';

import GestionCoordinacionImpl from '../services/services/GestionCoordinacionImpl';

class CoordinacionController{
    private service:GestionCoordinacionImpl
    constructor(){
        this.service = new GestionCoordinacionImpl();
    }
    public accept = async (req:Request,res:Response)=>{
        const {prc,usr} = req.params
        const result = await this.service.aprobarFormatoACorrecciones(parseInt(usr),parseFloat(prc));
        if(result != null)
        {
            if(result)
                res.status(200).json(result);
            else    
                res.status(404).json({message:"Error al cambiar estado"});
        }else{
            res.status(401).json({error:"Usuario sin acceso"});
        }
    }

    public decline = async (req:Request,res:Response)=>{
        const {prc,usr} = req.params
        const result = await this.service.rechazarFormatoA(parseInt(usr),parseFloat(prc));
        if(result != null)
        {
            res.status(200).json(result);
        }else{
            res.status(401).json({error:"Usuario sin acceso"});
        }
    }
}
const coordinacionController = new CoordinacionController();
export default coordinacionController;