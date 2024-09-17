import { execute } from "../database/sqlite.js";

async function Favoritos(id_usuario) {
    let sql = `select f.*, e.ICONE,e.NOME,e.ENDERECO,e.COMPLEMENTO,e.BAIRRO,e.CIDADE,e.UF
    from USUARIO_FAVORITO f
    join EMPRESA e on (e.ID_EMPRESA = f.ID_EMPRESA)
    where f.ID_USUARIO = ?`;

    let favoritos = await execute(sql, [id_usuario]);

    return favoritos;

}
async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {
    let sql = `insert into usuario(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep,dt_cadastro) 
    values (?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP )
    returning id_usuario
    `;

    let usuario = await execute(sql, [nome, email, senha, endereco, complemento, bairro, cidade, uf, cep]);

    let retorno = {
        id_usuario: usuario[0].ID_USUARIO
    }

    return retorno;

}


export default { Favoritos, Inserir }