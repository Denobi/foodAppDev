import repositoryCategory from "../repositories/repository.category.js";


async function Listar(){

     const categorias = await repositoryCategory.Listar();

    return categorias;
}

export default{Listar}