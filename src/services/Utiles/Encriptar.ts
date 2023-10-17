import {genSaltSync, hashSync, compareSync} from "bcrypt"
class Encriptar{
    public hashPassword(pass:string):string{
        const salt = genSaltSync(10);
        const hash = hashSync(pass,10);   
        return hash;
    }
    public comparePassword(ucPass:string, ePass:string):boolean
    {
        return compareSync(ucPass, ePass);
    }
}
const enc = new Encriptar();
export default enc;
