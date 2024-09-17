import { Router } from "express";
import controllerCategory from "./controllers/controller.category.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();






router.get("/categorias", jwt.ValidateJWT, controllerCategory.Listar);
router.get("/banners", jwt.ValidateJWT, controllerBanner.Listar);

router.get("/empresas/destaques", jwt.ValidateJWT, controllerEmpresa.Destaque);

router.get("/pedidos", jwt.ValidateJWT, controllerPedido.Listar);
router.get("/pedidos/:id_pedido", jwt.ValidateJWT, controllerPedido.ListarId);


router.post("/usuarios/login", jwt.ValidateJWT, controllerUsuario.Login);
router.post("/usuarios",controllerUsuario.Inserir );
router.get("/usuarios/favoritos", controllerUsuario.Favoritos);

export default router;


// router.get("/restaurantes", (req, res) => {

//    const busca = req.query.busca;


//     res.json([
//         { id_restaurante: 1, nome:"Burguer King"},
//         { id_restaurante: 2, nome:"McDonalds",},
//         { id_restaurante: 3, nome:"Giraffas",}

//         // {message: "Nenhum restaurente localizado com a palavra: " + busca}

//     ])
// });