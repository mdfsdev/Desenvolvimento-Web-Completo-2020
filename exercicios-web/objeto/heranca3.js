const mae = { nome: 'Julia', corDosOlhos: 'verdes' }
const filha1 = Object.create(mae) // prototipo de filha passa a ser mae ao inves de apontar para Object.prototype
filha1.nome = 'Jessica'
console.log(filha1.corDosOlhos)

const filha2 = Object.create(mae, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)

filha2.nome = 'Karla'
console.log(`${filha2.nome} tem olhos ${filha2.corDosOlhos}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    console.log(key)
}

// Saber se determinado atributo pertence ao proprio objeto ou é advindo de heranca:
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // filha2 tem a propriedade 'key' ?
        console.log(key) : console.log(`Por heranca: ${key}`)
}