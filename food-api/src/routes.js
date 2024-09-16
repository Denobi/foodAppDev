import { Router } from "express";
import controllerCategory from "./controllers/controller.category.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";

const router = Router();



// router.get("/restaurantes", (req, res) => {

//    const busca = req.query.busca;


//     res.json([
//         { id_restaurante: 1, nome:"Burguer King"},
//         { id_restaurante: 2, nome:"McDonalds",},
//         { id_restaurante: 3, nome:"Giraffas",}

//         // {message: "Nenhum restaurente localizado com a palavra: " + busca}

//     ])
// });

router.get("/categorias", controllerCategory.Listar);
router.get("/banners", controllerBanner.Listar);

router.get("/empresas/destaques", controllerEmpresa.Destaque);

router.get("/pedidos", controllerPedido.Listar);
router.get("/pedidos/:id_pedido", controllerPedido.ListarId);


router.post("/usuarios/login", controllerUsuario.Login);
router.get("/usuarios",controllerUsuario.Inserir );
router.get("/usuarios/favoritos", controllerUsuario.Favoritos);

export default router;