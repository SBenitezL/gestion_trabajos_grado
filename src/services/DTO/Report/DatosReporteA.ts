import EstudianteReporte from "./EstudianteReporte";
import FormatoAReporte from "./FormatoAReporte";
import ProcesoReporte from "./ProcesoReporte";

export default class DatosReporteA{
    public constructor(
        public tipo:string,
        public proceso:ProcesoReporte,
        public estudiante:EstudianteReporte[],
        public formato:FormatoAReporte
    )
    {}
}