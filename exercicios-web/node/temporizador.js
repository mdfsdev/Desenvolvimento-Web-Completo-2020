// aula 143 - disparar processos temporizados
const schedule = require('node-schedule') // pacote importado: node-schedule

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function() { // disparar tarefa1 de 5 em 5 s em qualquer minuto, na hora 14, ignoraramos o dia e o mes, e dizemos que ele vai executar na terca-feira (dom - 0, seg - 1, terc - 2 ...)
    console.log('Execuntando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() { // temporizador padrao do JS (e nao do node-schdule). existem outros como o setImmediate e setInterval
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// criando uma outra tarefa de uma maneira diferente
const regra = new schedule.RecurrenceRule() // instanciando o objeto RecurrenceRule que existe dentro do node-schedule. ver: console.log(regra)
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda (1) a sexta (5)
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})