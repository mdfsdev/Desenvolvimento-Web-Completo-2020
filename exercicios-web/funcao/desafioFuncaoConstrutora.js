function Pessoa(nome) {
    this.nome = nome,
    this.falar = function() { console.log(`Meu nome é ${this.nome}`) } // se faz necessario o uso do this na criacao de um objeto tanto a partir da class quanto de uma funcao construtora
}

p1 = new Pessoa('Julia')
p1.falar()  

function PessoaSemThis(nome) {
    this.falar = function() { console.log(`Meu nome é ${nome}`) } 
}

const p2 = new PessoaSemThis('Jayminho')
// console.log(p2) // vai imprimir o objeto (que tem apenas o metodo falar!)
p2.falar() // invocando o metodo falar de p2
p2.nome = 'Edcarlos' // nao tem mais acesso a nome, nao consegue modificar mais este parametro apos a criacao de um objeto

