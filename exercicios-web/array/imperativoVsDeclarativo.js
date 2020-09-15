// Calcular a media dos alunos pelas abordagens imperativa e declarativa (funcional)
const alunos = [
    { nome: "Caio", nota: 3.1 },
    { nome: "Leandro", nota: 0.3 }
]

// Abordagem imperativa (maior preocupacao com o "como", descricao detalhada passo a passo, pouco reuso no codigo). controle de todos os passos.
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Abordagem imperativa (maior preocupacao com o "o quê", mais reuso no codigo)
const getNotas = produto => produto.nota // produto e cada elemento (objeto) do array alunos. estamos retornando o atributo nota destes elementos.
const soma = (acumulador, atual) => acumulador + atual // criterio de agregacao a ser utilizado no reduce()

const total2 = alunos.map(getNotas).reduce(soma)
console.log(total2 / alunos.length)

// html e sql sao linguagens mais declarativas