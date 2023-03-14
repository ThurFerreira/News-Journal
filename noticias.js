 var http = require('http')

var server = http.createServer( (req, res) => {

    var categoria = req.url
    
    if(categoria == "/tecnologia"){
        res.end("<html><body> Portal de tecnologias <body><html>")

    }else{
        res.end("<html><body> Portal de noticias Geral <body><html>")

    }
})

server.listen(3000)