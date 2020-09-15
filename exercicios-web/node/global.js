// console.log(global) // o objeto global no browser e o window e no node e o global

/* 
 * sempre que vc mexe no objeto global compartilhado a chance de dar problema e maior. 
 * o sistema de modulos do node vem justamente para resolver este problema.
 * mas eventualmente vc vai querer colocar algum objeto seu personalizado em global (cenarios de excecao)
 */

 global.minhaApp = {
     saudacao() {
         return 'Estou em todos os lugares!'
     },
     nome: 'Sistema Legal'
 }

/*  Uma alternativa para impedir modificoes em um objeto compartilhado seria (descomentar e ver globalCliente.js):

global.minhaApp = Object.freeze({
     saudacao() {
         return 'Estou em todos os lugares!'
     },
     nome: 'Sistema Legal'
 })

*/

// Tenha muito cuidado ao estar tocando o escopo global, pois voce estara tocando em algo mais sensivel(perigoso). 
// O sistema de modulos do node ja vem para separar as coisa de uma forma mais organizada (forma padrao de se trabalhar com o node).