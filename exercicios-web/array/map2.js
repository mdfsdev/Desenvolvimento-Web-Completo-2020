// Aula 112

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json) // converte um texto para um objeto. Estudar!
const apenasPreco = produto => produto.preco // vai retornar o atributo preco dos objetos criados (produto)

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)