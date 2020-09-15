function compras(trabalho1, trabalho2) {
    const ComprarSorvete = trabalho1 || trabalho2 // || 2 pipes -> ou Se trabalho1 nem precisa analisar trabalho2
    const comprarTv50 = trabalho1 && trabalho2 // Se trabalho1 for F nem precisa analisar trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Operador bitwise xor. Artificio: duas negacoes logicas para converter algo para boolean. Não existe um operador ou exclusivo no JS para trabalhar com tipos boleanos. Existe um operador bit a bit ou exclusivo: ^ (?). Prof prefere a forma abaixo:
    const comprarTv32 = trabalho1 != trabalho2 // Mais fácil que forma acima!
    const manterSaudavel = !ComprarSorvete
    return { ComprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    // A forma acima é um novo recurso resumido para criacao de objetos. Poderia ser:
    // return {
    //     ComprarSorvete: ComprarSorvete,
    //     comprarTv50: comprarTv50,
    //     comprarTv32: comprarTv32,
    //     manterSaudavel: manterSaudavel
    // }
    // O nomes das chaves poderiam ser qualquer nomes relacionados.
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// || e && são operadores curto-circuito: a análise do primeiro operando já pode responder se a condicao foi atendida
// Apenas ! é operador unário
// JavaScript suporta apenas um retorno! Podemos jogar tudo dentro de um unico objeto.