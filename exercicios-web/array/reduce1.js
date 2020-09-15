// aula 116
// Reduce traz consigo a ideia de reduzir, de agregar os valores em um só
const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota)) // expressao retorna um array apenas com as notas dos aluno
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) // apenas para printar a evolucao do processo
    return acumulador + atual
}, 0) // acumulador será o valor presente no indice 0 (? rever aula!)
console.log(resultado) // printando o resultado final