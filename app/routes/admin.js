module.exports = function (app) {
    app.get('/form', (request, result) => {
        result.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', (request, result) => {
        var connection = app.config.dbConnection()
        var noticiasModel = app.app.models.noticiasModel

        //recuperando informações do formulario
        var noticia = request.body
        result.send(noticia)


        noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
            res.render("noticias/noticia", { noticia: result })
        })
    })
}