module.exports = function (app) {

    app.get('/form', (request, res) => {
        res.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', (request, res) => {
        var connection = app.config.dbConnection()
        var noticiasModel = new app.app.models.noticiasDAO(connection)

        var noticia = request.body

        //express validator
        //request.assert('titulo', 'Titulo é obrigatorio').notEmpty()
        //request.assert('resum', 'Resumo é obrigatorio').notEmpty()
        //request.assert('resum', 'Resumo entre 10 e 100').len(10,100)
        //request.assert('autor', 'Autor é obrigatorio').notEmpty()
        //request.assert('data_noticia', 'data é obrigatorio').notEmpty().isDate({format:'YYYY-MM-DD'})
        //request.assert('noticia', 'noticia é obrigatoria').notEmpty()

        //recuperando informações do formulario

        noticiasModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias')
        })
    })
}