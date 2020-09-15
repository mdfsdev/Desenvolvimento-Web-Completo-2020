// Do-while é pouco utilizada na pratica!
function getNumeroAleatorioEntre(min, max) {
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getNumeroAleatorioEntre(-1, 10)
    console.log(`A opcao escolhida foi ${opcao}.`)
} while(opcao != -1) // do-while é a unica estrutura de controle na qual a expressao esta depois do bloco de codigo. msm que opcao = -1 vai executar a primeira repeticao! Neste caso o valor de opcao sera modificado pelo codigo e só entao sera feita a verificacao da expressao

console.log('Até a próxima!')
