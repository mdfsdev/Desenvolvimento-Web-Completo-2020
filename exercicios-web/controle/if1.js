function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo() // undefined é falsy
seForVerdadeEuFalo(null) // falsy
seForVerdadeEuFalo(undefined) // (explicitamente undefined) falsy
seForVerdadeEuFalo(NaN) // falsy
seForVerdadeEuFalo('') // falsy
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) // truthy
seForVerdadeEuFalo(' ') // (string com um espaco em branco) truthy
seForVerdadeEuFalo('?') // truthy
seForVerdadeEuFalo([]) // truthy
seForVerdadeEuFalo([1, 3, 5]) // truthy
seForVerdadeEuFalo({}) // (objeto vazio) truthy

