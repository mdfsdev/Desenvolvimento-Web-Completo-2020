// node faz cache dos modulos que sao importados a partir da funcao require por padrao. uma forma de driblar isto e utilizando a funcao factory (se vc quiser importar um modulo e que toda vida um novo objeto seja gerado)
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}