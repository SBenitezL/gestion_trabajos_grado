import FormatoBEntity from "../../../models/FormatoBEntity";
import EstudianteReporte from "./EstudianteReporte";
import ProcesoReporte from "./ProcesoReporte";

export default class DatosReporteB{
    public constructor(
        public tipo:string,
        public proceso:ProcesoReporte,
        public estudiante:EstudianteReporte[],
        public formato:FormatoBEntity,
        public evaluador:string
    )
    {}
}