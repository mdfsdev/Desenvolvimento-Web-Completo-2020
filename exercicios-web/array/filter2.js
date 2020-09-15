Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // criterio de filtragem
            return newArray.push(this[i]) // adicionando o elemento no newArray, caso ele passe no teste de filtragem acima
        }
    }
    return newArray
}
const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Ipad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]

// filtrar produtos caros e frageis
// criando duas funcoes callback para os criterios
const produtosCaros = produto => produto.preco > 2000 // se produto.preco > 2000 for true a funcao produtosCaros ira retornar o produto.preco daqueles produtos cujo preco e maior que 2000
const produtosFrageis = produto => produto.fragil // se produtos.fragil for true a funcao produtosFrageis ira retornar ...

console.log(produtos.filter2(produtosCaros).filter2(produtosFrageis))