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

   

    return usuario[0];

}
async function ListarByEmail(email) {
    let sql = `select id_usuario, senha, nome,email,endereco,complemento, bairro,cidade,uf,cep,dt_cadastro
    from usuario 
    where email = ?`;

    let usuario = await execute(sql, [email]);

    if (usuario.length == 0) {
        return [];
    }else{
        return usuario[0];
    }

    

}
async function ListarById(id_usuario) {
    let sql = `select id_usuario,nome,email,endereco,complemento, bairro,cidade,uf,cep,dt_cadastro
    from usuario 
    where id_usuario = ?`;

    let usuario = await execute(sql, [id_usuario]);

    if (usuario.length == 0) {
        return [];
    }else{
        return usuario[0];
    }

    

}


export default { Favoritos, Inserir,ListarByEmail,ListarById }