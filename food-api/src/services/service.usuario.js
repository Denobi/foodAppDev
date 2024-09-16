
import repositoryUsuario from "../repositories/repository.Usuario.js";


async function Favoritos(id_usuario){

     const favoritos = await repositoryUsuario.Favoritos(id_usuario);

    return favoritos;
}

export default{Favoritos}