// acessar os dois modulos (A e B) utilizando o CommonsJS (sitema de modulo do Node)
// forma de requerer/de acessar aquilo que foi exportado nos outros modulo!
const moduloA = require('./moduloA') // utilizamos o caminho relativo (./), pois estamos referenciando um modulo que esta dentro do nosso sistema. existem outras formas para importar modulos de terceiros e nestes casos nao usaremos o caminho relativo. nao precisamos colocar a extensao do arquivo. por padrao e .js (pois estamos trabalhando dentro de um runtime JS - Node)
                                     // arquivos qjue estão dentro da pasta do seu projeto são acessados de maneira relativa - atraves do uso do caminho relativo ()./). Para sair de uma pasta um ponto seguido do outro (para acessar arquivos que nao estao na pasta de seu projeto)
                                     // exportamos do modula A: ola, bemVindo e ateLogo. 
                                     

const moduloB = require('./moduloB') // exportamos do moduloB um objeto que contem um atributo bomDia e uma funcao chamada boaNoite

// aquilo que exportamos do modulo armazenamos na const moduloA e aquilo que exportamos de moduloB estamos armazenando na constante moduloB

console.log(moduloA) // o this, o exports e o module.exports sao a mesma coisa!

console.log(moduloA.ola, moduloA.bemVindo, moduloA.ateLogo)

console.log(moduloB)
console.log(moduloB.bomDia, moduloB.boaNoite()) // quando passamos uma funcao como parametro de outra funcao sem o uso do parametro estamos apenas referenciando-as (?), quando usamos os parenteses estamos invocando-a (executando-a) (?)