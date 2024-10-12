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
async function Inserir(id_usuario,dados) {

    let sql = `INSERT INTO pedido(id_usuario,      
    id_empresa,    
    vl_subtotal ,    
    vl_taxa_entrega, 
    vl_total, dt_pedido,status  ) values (?,?,?,?,?,CURRENT_TIMESTAMP,'P')
    returning id_pedido
    `;

    const pedido = await execute(sql, [id_usuario,      
        dados.id_empresa,    
        dados.vl_subtotal ,    
        dados.vl_taxa_entrega, 
        dados.vl_total]);
    
        const id_pedido =pedido[0].id_pedido;
        dados.itens.map(async (item)=>{
            sql=`INSERT INTO pedido_item( id_pedido, id_produto,  obs, qtd, vl_unitario, vl_total )
            values (?, ?, ?, ?, ?, ?)`;
            await execute(sql, [id_pedido, item.id_produto, item.obs, item.qtd, item.vl_unitario, item.vl_total]);
        });

    return pedido[0];

}

export default { Listar, ListarId, Inserir }