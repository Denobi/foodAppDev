import { execute } from "../database/sqlite.js";

async function Listar() {
    let sql = `SELECT p.*,e.nome, e.icone FROM PEDIDO p
    join empresa e on (e.id_empresa = p.id_empresa)
    order by p.id_pedido DESC`;

    const pedidos = await execute(sql, []);

    return pedidos;

}

export default{Listar}