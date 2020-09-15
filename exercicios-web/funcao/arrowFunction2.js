function Pessoa() {
    this.idade = 0,

    setInterval(() => {
        this.idade++ // this nao vai variar de acordo com o contexto em que a funcao construtora for chamada
        console.log(this.idade)
    }, 1000)
}

new Pessoa