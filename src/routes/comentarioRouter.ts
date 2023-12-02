import { Router } from "express";
import multer from 'multer';
import comentarioController from "../controllers/ComentariosController";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'pdf/COMENTARIO/'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Nombre del archivo original
    }
  });
//TODO:)
const upload = multer({ storage: storage });
class ComentarioRoutes{
    public router:Router = Router();
    constructor()
    {
        this.config();
    }
    private config():void
    {
       this.router.post('/upload/:id',upload.single('archivo') ,comentarioController.uploadA);
       this.router.get('/download/:id', comentarioController.download);

    }
} 
const comentarioRoutes = new ComentarioRoutes();
export default comentarioRoutes.router;