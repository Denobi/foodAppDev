import { execute } from "../database/sqlite.js";

async function Listar() {
    let sql = `SELECT p.*,e.nome, e.icone FROM PEDIDO p
    join empresa e on (e.id_empresa = p.id_empresa)
    order by p.id_pedido DESC`;

    const pedidos = await execute(sql, []);

    return pedidos;

}
async function ListarId(id_pedido) {
    let sql = `SELECT p.*,e.nome, e.icone FROM PEDIDO p
    join empresa e on (e.id_empresa = p.id_empresa)
    where p.id_pedido = ?
    order by p.id_pedido DESC`;


    const sqlItens = `select i.*, p.NOME, p.DESCRICAO,p.ICONE 
        from pedido_item i
        join produto p on (p.ID_PRODUTO = i.ID_PRODUTO)
        where i.ID_PEDIDO = ?
        order by i.id_item
        `;
    const pedido = await execute(sql, [id_pedido]);
    const itens = await execute(sqlItens, [id_pedido]);
    pedido[0].itens = itens;
    return pedido[0];

}

export default { Listar, ListarId }