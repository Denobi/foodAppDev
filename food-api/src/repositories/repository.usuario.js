import { execute } from "../database/sqlite.js";

async function Favoritos(id_usuario) {
    let sql = `select f.*, e.ICONE,e.NOME,e.ENDERECO,e.COMPLEMENTO,e.BAIRRO,e.CIDADE,e.UF
    from USUARIO_FAVORITO f
    join EMPRESA e on (e.ID_EMPRESA = f.ID_EMPRESA)
    where f.ID_USUARIO = ?`;

    const favoritos = await execute(sql, [id_usuario]);

    return favoritos;

}


export default { Favoritos }