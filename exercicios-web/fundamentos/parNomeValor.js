var saudacao = 'Opa'; // contexto léxico 1: local fisico do seu codigo o par chave-valor foi definido. Objeto global window.

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares chave-valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 100,
    endereco: { // Podemos ter um objeto dentro de outro. Sáo contextos diferentes
        Rua: 'Rua Muito Engracada',
        Numero: 235,
        Apt: 204
    }
}

saudacao = 'Epa!' // reatribuicao da variavel saudacao

console.log(saudacao) // contexto lexico 1
console.log(exec()) // contexto lexico 2
console.log(cliente) // objeto cliente

