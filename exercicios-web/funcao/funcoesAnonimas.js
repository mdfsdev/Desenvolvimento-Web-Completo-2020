const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) { // se nao definir operacao, por padrao sera soma (funcao)
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // realizara a funcao soma implicitamente (valor padrao de operacao e soma)
imprimirResultado(3, 4, soma) // utilizando soma explicitamente como valor para o parametro operacao
imprimirResultado(3, 4, function(x, y) { // passando uma funcao anonimo diretamente na chamada da funcao imprimirResultado
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // arrow function (toda funcao arrow e uma funcao anonima - vc pode armazena-la em uma variavel)

const pessoa = {
    falar: function() { // forma mais enxuta: pode excluir function()
        console.log('Opa!')
    }
}
pessoa.falar()