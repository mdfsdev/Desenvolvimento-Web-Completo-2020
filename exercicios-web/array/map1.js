const nums = [1, 2, 3, 4, 5]

// O map é um for com proposito. gera um novo array, transformado (dados transformados), de mesmo tamanho. nao causa modificacao no array original

let resultado = nums.map(function(e) { // armazenando o array resultante numa variavel. passando uma funcao callback como parametro do map. trata-se da funcao que que queremos usar para transformar cada um dos elementos do array.
    return e * 2 // a funcao que vamos passar para um map obrigatoriamente tem que retornar alguma coisa. se nao tiver retorna undefined
})

console.log(resultado, nums)


// 3 funcoes callback passadas em 3 maps sucessivos. 
// 1 funcao:
const soma10 = e => e + 10 // retorno implicito na arrow function. e = elemento (valor)
// 2 funcao
const triplo = e => e * 3 // e = elemento (valor)
// 3 funcao. 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // transforma number em reais (string). formatacao. e = elemento (valor)

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // o resultado do primeiro map e um array no qual podemos aplicar outro map subsequente e assim por diante, de maneira encadeada.
console.log(resultado) // elementos se tornaram string pq utilizamos uma template string acima