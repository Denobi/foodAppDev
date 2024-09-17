import jwt from "jsonwebtoken";

const secretToken = "MySECREET@123";

function CreateJWT(id_usuario) {
    const token = jwt.sign({id_usuario},secretToken,{
        expiresIn:99999,

    });
        return token;
}

function ValidateJWT(req,res,next){

    const authToken = req.headers.authorization;
    
    if(!authToken){
        return res.status(401).send({error:"Token não informado!!!"})
    }
    
        const [aux,token] = authToken.split(" ");

    jwt.verify(token, secretToken, (err, decoded)=>{
        if(err){
            return res.status(401).send({error:"Token Inválido !!!"})

        }
        req.id_usuario = decoded.id_usuario;

        next();
    });

}

export default {CreateJWT, ValidateJWT}