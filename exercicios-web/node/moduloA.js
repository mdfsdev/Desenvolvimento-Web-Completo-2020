// node e o runtime que te permite rodar JS no server side
// formas de vc exportar (criacao dinamica de atributos):
console.log(this) // inicialmente o this e um objeto vazio!
this.ola = 'Fala Pessoal!' // forma 1 criacao de um atributo dentro do objeto global (?)
exports.bemVindo = 'Bem vindo ao Node!' // forma 2 criacao de um atributo dentro do exports
module.exports.ateLogo = 'Até o próximo exemplo!' // forma 3 criacao de um atributo dentro do module.exports

// o this, o exports e o module.exports sao a mesma coisa! estamos colocando tres atributos de formas diferentes no mesmo objeto!
// apenas aquilo que vc exporta para fora de um modulo e que estara visivel para os outros modulos!

