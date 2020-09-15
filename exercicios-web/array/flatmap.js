const escola = [{ // escola é um array de objetos
    nome: 'Turma M1',
    alunos: [{ // alunos é um array de objetos
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 7.4
    }], 
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Carlos',
        nota: 8.5
    }, {
        nome: 'Teresina',
        nota: 10
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma) // escola e um array de turmas. vai gerar um array com dois arrays
console.log(notas1) 

// Flatmap: um map associado com um concat. Nao existe na API do JS, vamos implementá-la

Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
// o que fizemos acima e semelhante a [].concat([...], [...])

const notas2 = escola.flatmap(getNotasDaTurma)
console.log(notas2)
