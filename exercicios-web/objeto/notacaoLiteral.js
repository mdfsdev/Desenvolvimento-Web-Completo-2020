const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // esta duplicidade nao e mais necessaria. apenas se vc quiser mudar o nome dos atributos.
const obj2 = { a, b, c } // os nomes dos atributos serao os nomes das constantes
console.log(obj1, obj2) // neste caso, serão identicos

const nomeAtrib = 'nota'
const valorAtrib = 84

const obj3 = {}
obj3[nomeAtrib] = valorAtrib
console.log(obj3)

const obj4 = { [nomeAtrib]: valorAtrib }

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() { // Forma reduzida (sem a palavra reservada function) de se criar uma funcao. Adicionada com o ES2015
        //...
    }
}

console.log(obj5)