import { Router } from "express";
import anteproyectoController from "../controllers/AnteproyectoController";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'pdf/ANTEPROYECTO/'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Nombre del archivo original
    }
  });
//TODO:)
const upload = multer({ storage: storage });
class AnteproyectoRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
       this.router.post('/upload/:id',upload.single('archivo') ,anteproyectoController.uploadA);
       this.router.get('/download/:id', anteproyectoController.download);

    }
} 
const anteproyectoRoutes = new AnteproyectoRoutes();
export default anteproyectoRoutes.router;