const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

imprimirResultado('Epa!') // Vai dar falso e imprimirá 'Reprovado, o que nao era pra ocorrer em um sistema. Cuidado!!!
