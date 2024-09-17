
import serviceUsuario from "../services/service.usuario.js";
import jwt from "../token.js";

async function Favoritos(req, res) {
    try {
        const id_usuario = 1;
        const favoritos = await serviceUsuario.Favoritos(id_usuario);

        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({ error })
    }
}
async function Login(req, res) {

    const { email, senha } = req.body;

    // const email =req.body.email;
    // const senha =req.body.senha;

    if (email == "teste@teste.com" && senha == "12345") {

        res.status(200).json({
            id_user: 1,
            email: "heber@teste.com",
            nome: "Heber Stein Mazutti",
            token: jwt.CreateJWT(123)
        })
    }
    else {

        res.status(401).json({
            error: "E-mail ou Senha invalidos ou errados"

        })
    }
}
async function Inserir(req, res) {
    try {
        const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;

        const usuario = await serviceUsuario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

        usuario.token=jwt.CreateJWT(usuario.id_usuario)
        
        res.status(201).json(usuario);

    } catch (error) {
        res.status(500).json({ error })
    }



}

export default { Favoritos, Login, Inserir }

