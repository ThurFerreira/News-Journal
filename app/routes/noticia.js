module.exports = function (app) {

    app.get('/noticia', (req, res) => {
        
        //conectando ao banco de dados
        var connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.noticiasDAO(connection)
    
        noticiasModel.getNoticia((error, result) => {
            res.render("noticias/noticia", { noticia: result })
        })
    })
}