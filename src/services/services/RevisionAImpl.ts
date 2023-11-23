import IRevisionARepository from "../../repositories/IRevisionARepository";
import RevisionADTO from "../DTO/RevisionADTO";
import RevisionAMapper from "../Maping/RevisionAMapper";
import IRevisionA from "./IRevisionA";
import datos from "../../repositories/RevisionARepository";
class RevisionAImpl implements IRevisionA
{
    private mapper:RevisionAMapper
    public constructor(private accesoDatos:IRevisionARepository)
    {
        this.mapper = new RevisionAMapper();
    }
    public async cambiarEstadoFormatoA(codigo: number): Promise<RevisionADTO[]> {
        const entity = await this.accesoDatos.listarFormatosA();
        const dto:RevisionADTO[] = this.mapper.listEntityToDTO(entity);
        return dto;
    }
    public async listarProcesos(cod: number): Promise<RevisionADTO[]> {
        const entity = await this.accesoDatos.cambiarEstadoFormatoA(cod);
        const dto:RevisionADTO[] = this.mapper.listEntityToDTO(entity);
        return dto;
    }
}
const revisionAImpl = new RevisionAImpl(datos);
export default revisionAImpl;