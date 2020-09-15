// Implementar nosso proprio forEach (forEach2)
// Aula 110. Reassistir novamente quando estiver mais avancado!
Array.prototype.forEach2 = function(callback) { // *** forEach2 é uma funcao que recebe como parametro uma outra funcao!
    for(let i = 0; i < this.length; i++) { // for para pecorrer os elementos do array
        callback(this[i], i, this) 
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})




// Tentar fazer o exemplo abaixo funcionar! Uma funcao que invoca outra funcao!

// function CorrerComOCarro(callback) {
//     let velocidade = 0
//     callback(velocidade) {
//         velocidade += 5
//     }
//     return velocidade
// }
// CorrerComOCarro(acelerar())
// console.log(velocidade)



// Exemplo de aluno no forum
// Object.defineProperty(Array.prototype, 'forEach2', { 
//    value: function (funcao) {
//    for (let i in this) {funcao(this[i],i,this)}},
//    enumerable: false   
// })
 
// const aprovados = ['Carol', 'John', 'Bruno', 'Denis']
// aprovados.forEach2(function (nome,indice) { return console.log(`${indice+1} ) ${nome}`)})