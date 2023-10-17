import {genSaltSync, hashSync, compareSync} from "bcrypt"
class Encriptar{
    public hashPassword(pass:string):string{
        const salt = genSaltSync(10);
        console.log(salt);
        console.log(pass); 
        const hash = hashSync(pass,10);   
        console.log(hash);
        return hash;
    }
    public comparePassword(ucPass:string, ePass:string):boolean
    {
        return compareSync(ucPass, ePass);
    }
}
const enc = new Encriptar();
export default enc;
