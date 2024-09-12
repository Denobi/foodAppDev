import { execute } from "../database/sqlite.js";

async function Listar() {
    let sql = "SELECT * FROM BANNER order by ordem";

    const banners = await execute(sql, []);

    return banners;

}

export default{Listar}