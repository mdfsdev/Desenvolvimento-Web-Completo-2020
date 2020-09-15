function soma() {
    let soma = 0
    for (i in arguments) { // arguments e um array interno a toda funcao. contem todos os seus parametros. se a funcao nao tem parametros, arguments e um array vazio
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.3, "Teste"))
console.log(soma('a', 'b', 'c')) // vai retorna 0abc, pois soma ja possui como valor zero, ocorrendo a concatenacao com os valores passados

