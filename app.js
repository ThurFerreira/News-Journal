var app = require('./config/server')

//substituido pelo consign
//var rotaNoticias = require('./app/routes/noticias')(app)
//var rotaHome = require("./app/routes/home")(app)
//var rotaForm = require("./app/routes/form")(app)


//app.listen(3000, () => { console.log(msg()) })//sintaxe para execução da cunção importada
app.listen(3000, () => { console.log("servidor on") })


