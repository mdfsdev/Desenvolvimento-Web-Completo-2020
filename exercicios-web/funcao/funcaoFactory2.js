// Factory é um padrao de projeto (?)
function criarProduto(nome, preco) {
    return {
        nome, // mesma coisa que nome: nome
        preco, // mesma coisa que preco: preco
        desconto: 0.15
    }
}

console.log(criarProduto('Chevrolet Prisma', 40000))
console.log(criarProduto('Iphone', 5000))