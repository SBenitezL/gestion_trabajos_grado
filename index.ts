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
import multer from 'multer';
import evaluadorRoutes from "./src/routes/EvaluadorRoutes"
import anteproyectoRoutes from "./src/routes/AnteproyectoRoutes";
import comentarioRoutes from "./src/routes/comentarioRouter";
import consejoRoutes from "./src/routes/ConsejoRoutes";
import coordinacionRoutes from "./src/routes/CoordinacionRoutes";
import formatoBRoutes from "./src/routes/FormatoBRoutes";

//TODO:Borrar
import prueba from "./src/repositories/report/repositories/ReporteARepository";
import EstudianteReporte from "./src/services/DTO/Report/EstudianteReporte";
import GestionFormatoBRepositoryImpl from "./src/repositories/GestionFormatoBRepository";
import { crearHash, compareHash } from "./src/services/Utiles/Encriptar";
import FormatoBEntity from "./src/models/FormatoBEntity";
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
        this.app.use('/api/formatoA',formatoARoutes);  
        this.app.use('/api/procesos',procesoRoutes);
        this.app.use('/api/estudiantes',EstudiantesRoutes);
        this.app.use('/api/revisiones', revisionFARoutes);
        this.app.use('/api/evaluadores', evaluadorRoutes);
        this.app.use('/api/anteproyecto', anteproyectoRoutes);
        this.app.use('/api/comentario', comentarioRoutes);
        this.app.use('/api/consejo', consejoRoutes);
        this.app.use('/api/coordinacion', coordinacionRoutes);
        this.app.use('/api/formatoB', formatoBRoutes);
    }
    //dr
    staticFiles():void{
        this.app.use('/pdf', express.static(path.join(__dirname, 'GESTION_TRABAJOS_GRADO', 'pdf', 'TI-A')));

    }
     start():void{
        this.pruebas();
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
    pruebas():void{
        console.log(crearHash('luchin123'))

    }
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'pdf/ANTEPROYECTO/'); // Carpeta donde se guardarán los archivos
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname); // Nombre del archivo original
        }
      });
}
const server=new Servidor();
server.start();
