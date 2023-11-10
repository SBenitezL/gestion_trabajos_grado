import RevisionADTO from "../DTO/RevisionADTO";
import IRevisionA from "./IRevisionA";
class RevisionAImpl implements IRevisionA
{
    public async listarProcesos(cod: number): Promise<RevisionADTO> {
        throw new Error("Method not implemented.");
    }

}