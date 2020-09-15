const ferrari = {
    modelo: 'F40',
    velMax: 300
}

const lamborguini = {
    modelo: 'Aventator',
    velMax: 340
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)