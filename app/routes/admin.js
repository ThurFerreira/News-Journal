module.exports = function (app) {

    app.get('/form', (request, res) => {
        res.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', (request, res) => {
        var connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.noticiasDAO(connection)

        //recuperando informações do formulario
        var noticia = request.body

        noticiasModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias')
        })
    })
}