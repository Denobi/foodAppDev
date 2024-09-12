import serviceCategory from "../services/service.category.js";
async function Listar(req,res){
    try {
        const categorias = await serviceCategory.Listar();

        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({error})
    }
}

export default{Listar}