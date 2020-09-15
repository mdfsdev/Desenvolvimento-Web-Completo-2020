const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
// // Simular a impressao no console de um objeto como se fosse um array, utilizando-se, para tanto, do método toString de forma que ele seja nao listado
Object.defineProperty(quaseArray, 'toString', { // criacao de um objeto {} que vai representar todos os atributos do atributo toString que estamos criando no objeto quaseArray (????)
    value: function() { return Object.values(this)}, // toString vai ser uma funcao que vai retornar os valores do objeto quaseArray. Acredito que neste exemplo o professor alterou a funcao toString já presente na API do JS
    enumerable: false // nao quer que a funcao toString seja enumerada/aparecer no resultado da impressao
})

console.log(quaseArray.toString())