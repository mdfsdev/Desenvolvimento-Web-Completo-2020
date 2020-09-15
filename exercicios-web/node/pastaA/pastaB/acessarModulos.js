const moduloA = require('../../moduloA') // se colocassemos moduloa iria rodar nos servidores baseados em windows, mac; mas nao nos baseados em linux, que são a imensa maioria (>90%)! *** REspeite letras maiusculas e minusculas!!!! ***
console.log(moduloA.bemVindo)            // ../../ para sair da pastaB para a pasta node (saiu 2x: 1 pastaB, 2 pastaA)
                                         // a utilizacao de um path absoluto iria limitar a aplicacao e impediria (?) seu funcionamento em outros servidores
                                         // caminho absoluto: 'C:\Users\devre\OneDrive\Documentos\JavaScript\cod3r\exercicios-js\node\moduloA.js'
const saudacao = require('saudacao')     // node (?) vai procurar dentro do modulo saudacao que criamos dentro do node_modules um arquivo index.js (padrão, se for outro nome dará erro!) ***
console.log(saudacao.ola)

const moduloC = require('./pastaC/index') // ./ para avancar. nao e necessario colocar /index pq sera este arquivo que o node ira procurar por padrao
console.log(moduloC.ola2)                 // o arquivo index.js pode ser utilizado como uma maneira unica de voce acessar varios imports de outros arquivos
                                          // nao e uma boa pratica a criacao manual de modulos (?)


// modulos core: modulos que ja vem instalados com o node
// codigo abaixo vai ficar executando ate voce parar manualmente (é como se estivesse com o servidor ligado)
const http = require('http') // como e um modulo interno do node nao precisamos informar o caminho relativo, apenas o nome do modulo
http.createServer((req, res) => { // criacao de resposta (pelo servidor) a uma requisicao feita pelo browser
    res.write('Bom dia') 
    res.end()
}).listen(8080) // ficar escutando na porta 8080. vc pode colocar no browser localhost:8080 apos executar o codigo