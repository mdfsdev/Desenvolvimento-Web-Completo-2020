// vc nao sabe o numero de iteracoes

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // random gera um valor entre 0 e 1
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}
console.log('Até a próxima')

