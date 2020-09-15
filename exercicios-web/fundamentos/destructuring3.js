// passar como parametro dois atributos (de um objeto) dentro de um operador destructuring ao inves de usar obj.min e obj.max

function rand({ min = 0, max = 1000 }) { // <-- Operador destructuring quer dizer que vc vai passar como parametro os atributos min e max de um objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({}))

//console.log(rand({ max: 50, min: 40 })) <-- Exemplo utilizando um objeto como parametro ao inves do operador destructuring (exemplo acima) 
// Outra forma deste segundo exemplo seria:

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955 })) // vai utilizar o valor padrao max: 1000
console.log(rand({})) // passando um objeto vazio
console.log(rand())