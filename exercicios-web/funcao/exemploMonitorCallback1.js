//Exemplo monitor do curso
//Criei um array

let arrayNumeros = [1, 2, 3, 4, 5]
 
// Criei uma função que será passada como a callback do forEach
// Observe deve obedecer a ordem da assinatura das callbacks do forEach: 1. o valor corrente (numero a ser dobrado) 2. o índice(index do array). Semelhante ao padrao de projeto Observer (?). Ver: https://www.youtube.com/watch?v=REqVImw8Wgo
// As funções callbacks utilizadas em forEach têm uma assinatura com três parâmetros: o valor corrente, o índice e o array propriamente dito.
// Observe também você só precisa passar os parâmetros que for usar na função.

let dobro = function (numero, indice) {
    //A função apenas imprimirá o índice do elemento + 1 e o seu valor corrente * 2. 
    console.log(`O dobro do elemento ${indice+1} é igual a ${numero*2}`)
}
 
//Aqui ele chama o forEach à partir do array e passando a callback como parâmetro.
arrayNumeros.forEach(dobro)