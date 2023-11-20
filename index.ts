import express,{ Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from "path";//dr
import usuarioRolRoutes from "./src/routes/UsuarioRolRoutes";
import indexRoutes from "./src/routes/indexRoutes";
import rolesRoutes from "./src/routes/RolesRoutes";
import formatoARoutes from "./src/routes/FormatoARoutes";
import procesoRoutes from "./src/routes/ProcesoRoutes";
import EstudiantesRoutes from "./src/routes/EstudiantesRoutes";
import revisionFARoutes from "./src/routes/RevisionFARoutes";

//TODO:Borrar
import prueba from "./src/repositories/report/repositories/ReporteARepository";
import EstudianteReporte from "./src/services/DTO/Report/EstudianteReporte";

class Servidor{
    public app: Application;
    constructor(){
       this.app= express();
       this.config();
       this.routes();
       this.staticFiles();
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
        this.app.use('/api/procesos',procesoRoutes)
        this.app.use('/api/estudiantes',EstudiantesRoutes);
        this.app.use('/api/revisiones', revisionFARoutes)

    }
    //dr
    staticFiles():void{
        this.app.use('/pdf', express.static(path.join(__dirname, 'GESTION_TRABAJOS_GRADO', 'pdf', 'TI-A')));

    }
     start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server=new Servidor();
server.start();
