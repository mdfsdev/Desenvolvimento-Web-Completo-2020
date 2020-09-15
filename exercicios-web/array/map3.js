// Aula 113
Array.prototype.map2 = function(callback) {
    const newArray = [] // criacao de um novo array vazio
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // adicao de novos valores em newArray a partir da chamada da funcao callback (determinada posteriormente) que tem como parametros (valor, indice, proprio array)
    }
    return newArray // map2 retornará um novo array      
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos
// Criacao das funcoes passadas como callback do map e map2
const paraObjeto = json => JSON.parse(json) // converte um texto para um objeto. Estudar!
const apenasPreco = produto => produto.preco // vai retornar o atributo preco dos objetos criados (produto)

const resultado = carrinho.map(paraObjeto).map2(apenasPreco) // vc pode ate misturar o map ja presente na API do JS com o map2 que vc criou (ambos fazem a mesma coisa)
console.log(resultado)