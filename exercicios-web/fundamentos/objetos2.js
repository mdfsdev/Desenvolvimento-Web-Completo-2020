console.log(typeof Object)
console.log(typeof new Object) // instanciando uma funcao

const Cliente = function() {

}
console.log(typeof Cliente)
console.log(typeof new Cliente) // instanciando uma funcao

class Produto {} //ES 2015 (ES6). Exemplo de "Sintaxe Sugar": Escreve por baixo uma funcao. Funcoes podem ter atributos e comportamentos.
console.log(typeof Produto)
console.log(typeof new Produto()) // Pode deixar apenas Produto