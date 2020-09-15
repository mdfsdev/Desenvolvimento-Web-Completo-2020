const pessoa = {
    nome: 'Caio',
    idade: 29,
    peso: 78,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => { // operador destructuring ([chave, valor])
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // nao sera possivel alterar o valor do atributo dataNascimento
    value: '01/01/2019'
})

pessoa.dataNascimento = '03/03/2019' // nao ira alterar o valor 

console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)