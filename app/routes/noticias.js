module.exports = function (app) {

    app.get('/noticias', (req, res) => {

        //conectando ao banco de dados
        var connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.noticiasDAO(connection)

        noticiasModel.getNoticias((error, result) => {
            res.render("noticias/noticias", { noticias: result })
        })

    })
}