import { execute } from "../database/sqlite.js";

async function Listar() {
    let sql = "SELECT * FROM CATEGORIA order by ordem";

    const categorias = await execute(sql, []);

    return categorias;

}

export default{Listar}