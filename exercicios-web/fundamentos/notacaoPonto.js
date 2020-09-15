console.log(typeof console)
console.log(Math.ceil(6.1)) // arredondamento para cima. Math é um objeto. Vc usa . para definir uma funcao definida dentro do objeto (ceil)
const obj1 = {}
obj1.objeto = 'Bola' //criar dinamicamente um atributo dentro de um objeto 
obj1['esporte'] = 'Futebol' // usando colchete
console.log(obj1.objeto)

function Obj(nome) {
    this.nome = nome // fica visivel fora do escopo da funcao
    this.exec = function() { // this pode ser usado para criar atributos e tb metodos que serao expostos publicamente
        console.log('Exec...' + nome)
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()