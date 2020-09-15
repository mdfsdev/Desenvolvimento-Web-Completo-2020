const notas = [6.4, 3.1, 9.3, 7.7] // array e uma estrutura de dados indexada

// for in nao e uma estrutura de controle e sim para pecorrer os elementos de um array ou objeto

for(let i in notas) { // para array existem outras alternativas mais interessantes para pecorrer seus elementos
    console.log(i, notas[i]) // o que vc recebe e o indice, sendo possivle acessar os valores atraves do mesmo
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Paula',
    idade: 51,
    peso: 74
}

// mais interessante para objetos. codigo faz mais sentido
for(let atributo in pessoa) { // com o let vc nao tera acesso a atributo fora do for
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

