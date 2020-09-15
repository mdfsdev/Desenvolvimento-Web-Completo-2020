class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // funcao que sera invocada quando instanciarmos a classe (?)
        this.nome = nome // estamos criando no objeto que esta sendo instanciado o atributo nome que vai receber o valor de nome passado como parametro da funcao constructor
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
console.log(contas.addLancamentos)