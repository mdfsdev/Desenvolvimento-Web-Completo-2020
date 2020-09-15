const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // armazenando a funcao numa variavel. desta forma, o this interno da funcao falar perde sua referencia original.
falar() // vai dar undefined! conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // fixa o objeto que vc quer que seja resolvido o this. desta forma, o this apontara sempre para pessoa
falarDePessoa()
 