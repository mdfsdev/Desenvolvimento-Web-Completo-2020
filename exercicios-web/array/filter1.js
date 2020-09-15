// filter() serve para filtrar um array para ter um sub-array
// sempre que vc precisar transformar um array em outro use o map e sempre que quiser filtrar um array use o filter (no filter normalmente o array final e menor ou no maximo do mesmo tamanho que o array original)

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Ipad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]
// teste com return false
console.log(produtos.filter(function(p) { // funcao anonima como callback
    return false // vai retornar um array vazio
})) 
// teste com return true
console.log(produtos.filter(function(p) {
    return true // vai retornar um array identico ao original (Com todos os seus elementos - produtos: Notebook, Ipad Pro, Copo de Vidro e Copo de Plastico)
}))
// filter com algum tipo de criterio (filtro)
console.log(produtos.filter(function(p) {
    return p.preco > 2000 // cada elemento/valor do array sao os produtos descritos, com p.preco > 2000 estamos acessando o atributo preco de cada elemento do array produtos e validando se é ou nao > 2000 
}))

// filtrar produtos caros e frageis
// criando duas funcoes callback para os criterios
const produtosCaros = produto => produto.preco > 2000 // se produto.preco > 2000 for true a funcao produtosCaros ira retornar o produto.preco daqueles produtos cujo preco e maior que 2000
const produtosFrageis = produto => produto.fragil // se produtos.fragil for true a funcao produtosFrageis ira retornar ...

console.log(produtos.filter(produtosCaros).filter(produtosFrageis))