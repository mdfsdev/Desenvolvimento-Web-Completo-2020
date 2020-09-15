// process e um objeto disponivel globalmente no node
// temos como pegar parametros diretamente na chamada no terminal
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anonimo!\n') // stdout = standard output
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data',  data => { // stdin = standard input // o evento on data vai acontecer quando vc digita alguma coisa e da um enter vai chamar uma funcao // aquilo que vc digitou vai estar na variavel data (inclusive o enter)
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}