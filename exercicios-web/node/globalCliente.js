require('./global') // nao atribuimoa a uma variavel pois o modulo importado nao retorna nada. estamos simplesmente carregando ele.

console.log(minhaApp.saudacao()) // poderia ser tb global.minhaApp.saudacao()

minhaApp.nome = 'Boring System' // algo global de sua aplicacao que pode ser modificado em qualquer lugar é um risco
console.log(minhaApp.nome)