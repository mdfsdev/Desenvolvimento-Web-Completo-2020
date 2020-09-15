// estrategia 1 para gerar valor padrao: utilizando o operador ou ||  <-- Nao e legal
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // Unico caso que gera erro. A soma dara 3, ao inves de 0. 0 retorna falso. Como 1 é verdadeiro, utiliza-se 1 com valor.

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // <-- operador ternario. pode usar apenas != [ESTRATEGIA 2]
    b = 1 in arguments ? b : 1 // <-- existe o indice 1 em arguments? Se sim, utilize b, senao utilize 1 [ESTRATEGIA 3]
    c = isNaN(c) ? c : 1 // <-- a variavel c é NaN? Se nao retorne o valor de c, senao retorne 1. [ESTRATEGIA 4, mais segura]
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

// valor padrao do ES 2015. bem mais facil e indicada que estrategias acima, pois voce esta utilizando um recurso proprio da linguagem. Nao e necessario testar mais nada!
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))