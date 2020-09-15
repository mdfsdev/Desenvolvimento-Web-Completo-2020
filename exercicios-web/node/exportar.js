console.log(module.exports) // module.exports comeca como um objeto vazio
console.log(module.exports === this) // o this e uma referencia para a variavel module.exports
console.log(module.exports === exports) // a variavel exports aponta para module.exports

// se vc quiser exportar atraves do objeto vazio ja existente na primeira linha do codigo
this.a = 1 // a será visivel fora do arquivo
exports.b = 2 // b tb ficara visivel fora do arquivo
module.exports.c = 3 // c tb ficara visivel fora do arquivo

// o this e o exports sao so duas referencias que apontam para o mesmo objeto que module.exports aponta

exports = null // atribuindo um nulo a variavel exports
console.log(module.exports) // mesmo atribuindo um nulo para a variavel exports o module.exports continua apontando para o que setamos anteriormente (valores de a, b e c)
                            // exports e simplesmente uma outra variavel que aponta para o mesmo objeto/endereco de memoria, mas no final de contas apenas quem sera retornado/exportado a partir de um modulo é o module.exports


// forma errada de exportar criando um novo objeto (objeto nao sera retornado):
exports = { // mudamos a referencia de exports para um outro objeto, mas quem na vdd e retornado e o module.exports
    nome: 'Teste'
}

// forma correta de exportar criando um novo objeto:
module.exports = {
    publico: true
}
