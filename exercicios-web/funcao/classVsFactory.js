class Pessoa { // no final das contas class vai ser transformada em uma funcao (construtora?)
    constructor(nome) {
        this.nome = nome // com a utilizacao do this a variavel nome passa a ser publica, passa a ser acessivel a partir da instancia da classe (p1.nome)
    }                  

    falar() { // método falar
        console.log(`Meu nome é ${this.nome}`) // sem o this iria gerar um erro! com o this.nome acessamos o nome do objeto que foi instanciado (p1)
    }                                          // este this irá variar de acordo com o contexto de execucao (no browser) (?)
}                                              // se faz necessario o uso do this na criacao de um objeto tanto a partir da class quanto de uma funcao construtora

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => { // arrow function construtora atribuida à variavel criarPessoa (forma de nomear a funcao construtora)
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // método falar. o this nao e necessario na factory. nome náo ira variar no browser! (?)
    }
}

const p2 = criarPessoa('Carla')
p2.falar()
