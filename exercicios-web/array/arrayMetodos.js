const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // vc nao poderá atribuir alguma outra coisa diretamente para pilotos pq a a constante piloto sempre irá apontar para este array, mas vc pode mexer/alterar o CONTEUDO do array de outras maneiras que nao diretamente
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos) // 'Massa' nao vai mais aparecer pois foi excluido
pilotos.push('Verstappen') // adiciona um novo elemento dentro do seu array apos seu ultimo posicao
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array, semelhantemente ao pop(), q remove o ultimo elemento do array
console.log(pilotos)
console.log(pilotos[0])

pilotos.unshift('Hamilton') // contrario do metodo shift. adiciona um elemento no inicio do array
console.log(pilotos)


// splice pode adicionar e remover elementos dentro do array

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa') // antes do indice 2 adiciona Botas e Massa. Botas esta na posicao de indice 2 e Massa na de indice 3, depois continua o array normal como antes
console.log(pilotos)

// remover
pilotos.splice(3, 1) // na posicao de indice 3 remove apenas um unico elemento
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // metodo retorna um novo array a partir do indice 2, neste caso, que sera armazenado na variavel algunsPilotos1
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 2) // retorna um novo array contendo os elementos desde o indice 0 ao indice 1 <--- (o ultimo indice nao entra)
console.log(algunsPilotos2)