//Diferentes formas de criar objetos
//1 - Usando a notacao literal:
const obj1 = {}
console.log(obj1)

//2 - A partir da funcao construtora
console.log(typeof Object, typeof new Object) // Object é, em si, uma funcao
const obj2 = new Object
console.log(obj2)

//3 - Voce pode criar suas proprias funcoes construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome // variavel nao esta encapsulada dentro do objeto, está visivel para fora do objeto. Quando trabalhamos com o conceito de encapsulamento no JS temos de entender os niveis de visibilidade das coisas nos diferentes ambientes de execucao (browser, Node).
    this.getPrecoComDesconto = () => { // precoComDesconto sera um método da funcao (?)
        return preco * (1 - desconto)
    }
}

// No exemplo da funcao construtora conseguiremos alterar diretamente apenas o nome do produto, pois o preco e o desconto so estarao visiveis dentro da funcao.

// Instanciando os novos objetos
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 4250, 0.05) 
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//4 - Funcao/Padrao de Projeto Factory (cria ou fabrica alguma coisa. no caso, um objeto)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 8000, 3)
console.log(f1.getSalario())


// 5 - Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// 6 - Uma funcao famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"SOu um JSON"}') // converteu texto em um objeto e armazenou na variavel fromJSON
console.log(fromJSON.info)