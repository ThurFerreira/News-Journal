module.exports = function() {

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
    }

    this.salvarNoticia = function(noticia, connection, callback){
        //JSON deve possuir como rótulo das variaveis o mesmo nome que as colunas da tabela
        connection.query('INSERT INTO noticias set ?', noticia, callback)
    }

    return this;
}