function rand([ min = 0, max = 1000 ]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // rand() vai inverter min e max
console.log(rand([900])) //vai considerar 900 como min e max o valor default (1000)
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // vai dar erro pq vc vai tentar desestruturar algo que e null ou undefined