const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
// contadorA e contadorB compartilham do msm objeto retornado


const contadorC = require('./instanciaNova')() // <-- invocando a funcao retornada (funcao factory)
// const contadorC = require('./instanciaNova') <-- retorna uma funcao, que ao ser invocada com os parenteses 'adicionais' retorna um novo objeto
const contadorD = require('./instanciaNova')()
// contadorC e contadorD sao independentes

// incrementando o contadorA 2x
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // contadorB é afetado por mudancas (incrementos) no contadorA. O node por padrao faz caching daquilo que é retornado a partir de um require


contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // o valor do contadorD nao foi alterado por alteracoes (incremento) no contadorC