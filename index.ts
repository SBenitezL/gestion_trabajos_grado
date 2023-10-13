import express,{ Application } from "express";
import morgan from 'morgan';
import cors from 'cors';

import usuarioRolRoutes from "./src/routes/UsuarioRolRoutes";
import indexRoutes from "./src/routes/indexRoutes";
import rolesRoutes from "./src/routes/RolesRoutes";
import formatoARoutes from "./src/routes/FormatoARoutes";
class Servidor{
    public app: Application;
    constructor(){
       this.app= express();
       this.config();
       this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//entender los formatos json
        this.app.use(express.urlencoded({extended: false}));//enviar desde formulario html
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios',usuarioRolRoutes);     
        this.app.use('/api/roles', rolesRoutes);  
        this.app.use('/api/formatoA',formatoARoutes)  
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }

}
const server=new Servidor();
server.start();