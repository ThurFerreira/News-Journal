function NoticiasDAO(connection) {
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    //JSON deve possuir como rótulo das variaveis o mesmo nome que as colunas da tabela
    this._connection.query('INSERT INTO noticias set ?', noticia, callback)
}

module.exports = function() {
    return NoticiasDAO
}