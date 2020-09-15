console.log(this === global) // false. this aponta para module.exports
console.log(this === module) // false. mesmo motivo acima
console.log(this === module.exports) // true
console.log(this === exports) // true

// devemos prestar atencao quando estamos acessando o this dentro de uma funcao que esta dentro de um modulo
function logThis() {
    console.log('Dentro de uma funcao o this aponta para exports?')
    console.log(this === exports) // dentro de uma funcao o this nao aponta para exports, mas fora de uma funcao aponta (ver exemplos anteriores)
    console.log('Dentro de uma funcao o this aponta para module.exports?')
    console.log(this === module.exports)
    console.log('Dentro de uma funcao o this aponta para global?')
    console.log(this === global) // this dentro de uma funcao aponta para global e this fora de uma funcao, dentro de um modulo, aponta para module.exports
    this.nome = 'Roberto Carlos' // utilizando o this desta forma estamos inserindo a informacao dentro do escopo global

}
this.nome2 = 'Anice' // desta forma estamos inserindo a informacao dentro do module.exports. O atributo ou funcao sera transformado em algo publico/algo que sera visivel fora do modulo

// temos que ter muito cuidado em saber em que contexto estamos acessando o this!

logThis()

