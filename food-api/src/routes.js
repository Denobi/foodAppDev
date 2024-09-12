import { Router } from "express";
import controllerCategory from "./controllers/controller.category.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";

const router = Router();

router.post("/usuarios/login", (req, res) => {

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

});

router.get("/usuarios", (req, res) => {

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
});
router.get("/restaurantes", (req, res) => {

   const busca = req.query.busca;


    res.json([
        { id_restaurante: 1, nome:"Burguer King"},
        { id_restaurante: 2, nome:"McDonalds",},
        { id_restaurante: 3, nome:"Giraffas",}

        // {message: "Nenhum restaurente localizado com a palavra: " + busca}

    ])
});
router.get("/categorias", controllerCategory.Listar);
router.get("/banners", controllerBanner.Listar);

router.get("/empresas/destaques", controllerEmpresa.Destaque);

router.get("/pedidos", controllerPedido.Listar);
export default router;