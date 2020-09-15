// Operador destructuring -> tira da estrutura alguma coisa
// Recurso novo no ES 2015

const pessoa = {
    nome: 'Carol',
    idade: 29,
    endereco: {
        logradouro: 'Rua dos Bobos',
        numero: '0'
    }
}

const { nome, idade } = pessoa // operador desctructuring: extrair os atributos nome e idade do objeto pessoa. A partir deste comando teremos duas variaveis nome e idade extraida da estrutura objeto.
console.log('nome = ', nome, 'idade = ', idade)

const { nome: n, idade: i } = pessoa // teremos duas variaveis n e i
console.log('n = ', n, 'i = ', i)

const { sobrenome, bemHumorada = true } = pessoa // se o atributo bemHumorada náo existir, assumira o valor padrao true
console.log(sobrenome, bemHumorada)

const { endereco } = pessoa // atributo cep nao existe no objeto pessoa, logo sera printado como undefined
console.log(endereco)

const { endereco : {logradouro, numero, cep } } = pessoa // atributo cep nao existe no objeto pessoa, logo sera printado como undefined. Destructuring de um dado aninhado.
console.log(logradouro, numero, cep)

const { conta: { agencia, numero } } = pessoa // Destructuring de atributos que náo existem
console.log(agencia, numero)