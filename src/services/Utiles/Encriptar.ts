import bcrypt, {genSaltSync, hashSync, compareSync} from "bcrypt"
class Encriptar{
    public hashPassword(pass:string):string{
        const salt = genSaltSync();
        const hash = hashSync(pass,salt);   
        return hash;
    }
    public comparePassword(ucPass:string, ePass:string):boolean
    {
        return compareSync(ucPass, ePass);
    }
}
const enc = new Encriptar();
export default enc;

export const crearHash = (value:string)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
}
export const compareHash = (pass:string, encpass:string):boolean=>{
    return  bcrypt.compareSync(pass, encpass);
}