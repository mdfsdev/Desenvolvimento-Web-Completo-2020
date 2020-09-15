const fs = require('fs')

// criando um objeto utilizando a notacao literal
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15 
}

// transformar objeto em um JSON (formato textual): JSON.stringify
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // se o valor de err estiver nulo imprimirá Arquivo salvo!
})

// o codigo acima cria um arquivo .json no caminho especificado que corresponde a conversao do objeto produto em um arquivo textual .json