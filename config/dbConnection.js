var mysql = require("mysql")

var connMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    })
}

//impede a execução da conexão do banco de dados no autoload, pois a função que o carrega necessariamente executa a função retornada, mas desta forma, como está retornando a função dentro de uma variavel, ela nao é executada no momento do load, apenas quando é requerida

module.exports = function () {
    return connMySql
}
