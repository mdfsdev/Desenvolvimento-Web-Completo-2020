let num1 = 1
let num2 = 3

num1++  // Neste caso, tanto faz se vier antes ou depois do nome da variavel
console.log(num1)

++num1
console.log(num1)

--num2 // Neste caso, tanto faz se vier antes ou depois do nome da variavel. 
console.log(num2)

num2--
console.log(num2)

// A forma prefixada tem uma precedencia maior que a forma posfixada

let num3 = 3
let num4 = 4

console.log(++num3 === num4--) // O incremento foi executado antes da comparacao e o decremento após a comparacao, por isso, dará true! Não é legal fazer isto! Faca um codigo simples. Ideal fazer incremento antes, criar outras variaveis etc. Fuja de códigos complexos. Você poderá não entender seu próprio código depois de pouco tempo.
console.log(num3 === num4)
console.log(num3, num4)