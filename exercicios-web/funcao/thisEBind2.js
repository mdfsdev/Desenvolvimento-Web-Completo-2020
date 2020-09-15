function pessoa() {
    this.idade = 0,

    const self = this // como alternativa cria-se uma constante que recebe a referencia de this. em geral denominada de self. 
    setInterval(function() { // funcao anonima
        self.idade++ // quem esta chamando a funcao e o setInterval. this nao aponta para pessoa (antes era this no lugar do self)
        console.log(this.idade)
    }/*.bind(pessoa)*/, 1000)
}
