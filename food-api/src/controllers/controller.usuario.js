
import serviceUsuario from "../services/service.usuario.js";

async function Favoritos(req,res){
    try {
        const id_usuario = 1;
        const favoritos = await serviceUsuario.Favoritos(id_usuario);
        
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({error})
    }
}
async function Login (req, res) {

    const { email, senha } = req.body;

    // const email =req.body.email;
    // const senha =req.body.senha;

    if (email == "teste@teste.com" && senha == "12345") {

        res.status(200).json({
            id_user: 1,
            email: "heber@teste.com",
            nome: "Heber Stein Mazutti",
            insta: "@devpoint"
        })
    }
    else {

        res.status(401).json({
            error: "E-mail ou Senha invalidos ou errados"

        })
    }
}
async function Inserir (req, res) {

    const { nome, email, senha, enderco, complemento, bairro, cidade, uf, cep } = req.body;


    res.status(201).json({
        id_user: 1,
        nome,
        email,
        senha,
        enderco,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        insta: "@devpoint"
    })

}

export default{Favoritos,Login, Inserir}

