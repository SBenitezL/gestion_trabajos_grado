import FormatoCEntity from "../../../models/FormatoCEntity";
import EstudianteReporte from "./EstudianteReporte";
import ProcesoReporte from "./ProcesoReporte";

export default class DatosReporteC{
    public constructor(
        public tipo:string,
        public proceso:ProcesoReporte,
        public estudiante:EstudianteReporte[],
        public formato:FormatoCEntity,
        public evaluador:string[]
    )
    {}
}