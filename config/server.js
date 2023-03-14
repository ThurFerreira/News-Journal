const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const validator = require('express-validator')

//var msg = require('./mod_teste')() //sintaxe para execução da cunção importada
const app = express()//criando a funcao da aplicação

//incluindo middlwares
//incluindo body-parser (para recuperar as informações do body do formulario via post)
app.use(bodyParser.urlencoded({extended:true}))//extended: true - permite a inclusão de urls codificadas atraves de json
//app.use(validator());

consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .into(app)//importando todas as rotas da pasta de uma vez

app.set('view engine','ejs')
app.set('views','./app/views')//destino padrão de busca das views (diretorio relativo a partir do arquivo app)

module.exports = app