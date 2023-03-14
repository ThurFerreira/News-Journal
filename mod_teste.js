//module.exports = msg //necessário para a exportação de itens do módulo

module.exports = function(){//ao exportar uma função, é necessário que no app seja feita a sua execução usando a sintaxe apropriada
    let msg = "modulo_teste"
    return msg
}