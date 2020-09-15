// Funcao em JS é First-Class Object (Citizens)
// Higher-order function: voce pode tratar funcao como sendo um dado como qualquer um outro, pode passa-la como paramentro de outra funcao etc


// JS e uma linguagem multi-paradigma

// 1 - criar funcao de forma literal

function fun1() { } // o returno em uma funcao em JS e opcional. se nao definir nada, retornara undefined.
                    // o bloco no caso da funcao e obrigatorio, mesmo que tenha apenas uma unica sentenca de codigo

// 2 - armazenar em uma variavel
const fun2 = function () { } // Constante fun2 recebe uma funcao anonima e passa a referencia-la/invocá-la <-- fun2()
                             // vc pode passar a constante como parametro em uma funcao, nao e necessario o uso de () apos o nome

// 3 - Armazenar em um array
const array = [function(a, b) {return a + b, fun1, fun2}]

