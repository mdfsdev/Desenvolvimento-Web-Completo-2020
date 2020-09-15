const produto = new Object // funcao construtora (new Object): instanciar um novo objeto. Object é uma funcao.
produto.nome =  'Fone de Ouvidos'
produto['marca do produto'] = 'Sony' // da pra usar identificador com espacos etc., mas nao e indicado. so sera acessado desta maneira
produto.preco = 1300

console.log(produto)

delete produto.preco // deletar um atributo do objeto
delete produto['marca do produto']

console.log(produto)
produto['marca do produto'] = 'Bose'
produto.preco = 1400
console.log(produto)

const carro = {
    modelo: 'Range Rover',
    valor: 500000,
    proprietario: {
        nome: 'Marcos',
        idade: 33,
        endereco: {
            logradouro: 'Avenida Beira Rio',
            numero: 1429,
        }
    },
    condutores: [{ // Array de objetos
        nome: 'Tatyana',
        idade: 31
    }, {
            nome: 'Marcelo',
            idade: 62
    }],
    calculaValorSeguro: function() {
        //comandos...
    }
}

carro.modelo = 'Ferrari'
carro.valor = 350000
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = '1st Avenue'
console.log(carro)

delete carro.condutores // Apaga tudo que estiver abaixo de condutores.
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro.condutores) // Não dará erro msm com a exclusao do atributo (acima), dará undefined. Conseguimos acessar atraves da notacao ponto atributos ate mesmo que nao existem dentro do objeto (que está definido).
console.log(carro.condutores.length) // O problema ocorre quando tentamos acessar alguma coisa de algo que nao esta definido (condutores).
