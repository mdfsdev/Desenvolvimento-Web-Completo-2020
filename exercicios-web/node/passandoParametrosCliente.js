// exemplo mostra como importar uma funcao de outro modulo e passar seus parametros no modulo atual
const saudacoes = require('./passandoParametros')('Ana', 'Pedro', 'Caio', 'Julia')
// const saudacoes = require('./passandoParametros') <--- vai retornar a funcao criada em passandoParametros.js

console.log(saudacoes)