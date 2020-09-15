// Array é uma funcao, o resultado da instanciacao (operador new) de uma funcao é um objeto e o tipo de um array literal ([]) é um objeto!
console.log(typeof Array, typeof new Array, typeof []) 
// Array é um objeto especial que trabalha de maneira indexada, é uma estrutura dinamica (cresce, diminui0), é uma estrutura heterogenea (pode colocar varios tipos de dados dentro dele ao mesmo tempo, mas a boa pratica diz que e melhor utilizar dados de um unico tipo dentro de uma array)
let aprovados = new Array('Bia', 'Branca', 'Joana') // criacao de um array a partir da instanciacao da funcao, nao muito pratica/recomendada, mas e uma forma valida. e recomendado criar arrays com let para poder reatribuir nos valores posteriormente. o fato de criar um array com const nao quer dizer que os elementos deste array nao poderao sofrer modificacoes mas sim que o endereco de memoria é o mesmo, nao pode apontar para outro endereco de memoria.

/*
Dúvida esclarecedora sobre a questao do const e let no forum de perguntas

Se declarar um array/objeto com const não os torna efetivamente constantes (apenas o seu endereço em memória), qual o sentido/utilidade de se usar o const, nestes casos e não um let/var.

Boa tarde Karel!

É útil pra evitar que um dado referenciado por uma constante não seja reatribuído.

Por exemplo:

// Mesmo que os dados internos sejam passíveis de alteração,
// a constante config sempre apontará para o mesmo objeto
const config = {}
 
// não é possível
config = 123
 Se vc usar let, em qualquer momento algum código pode mudar completamente a referência.
*/

console.log(aprovados)
aprovados = ['Karla', 'Luiza', 'Marina'] // reatribuicao da variavel aprovados. se tivesse utilizado const acima ("na criacao da varival"), nao conseguiriamos reatribuir à variavel aprovados, mas poderiamos alterar os valores do array da seguinte forma aprovados[i] = valor
console.log(aprovados[0]) // o array e uma estrutura indexada a partir do indice 0 assim como a grande maioria das linguagens de programacao
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // o quarto elemento nao existe. JS vai retornar undefined

aprovados[3] = 'Rayane'
aprovados.push('Vitória') // mais apropriado para adicionar elementos no array, adiciona na ultima posicao do array
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Tatiana' // todos os elementos desde o ultimo elemento do array (indice 4) até o elemento de indice 9 ficarao undefined
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false

aprovados.sort() // funcao ira causar uma alteracao diretamente no array original (e não retorna um novo array), ira reordená-lo
console.log(aprovados)

delete aprovados[1] // operador delete. vai excluir o valor e colocar undefined na posicao, nao vai reordenar o array
console.log(aprovados[1])
console.log(aprovados[2]) // o valor do indice 2 nao mudou, e o msm de antes

aprovados = ['Teresa', 'Katia', 'Livia']
aprovados.splice() // funcao splice serve tanto para adicionar e/ou remover elementos
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // splice(indice a partir do qual vc quer trabalhar, quantos elementos vc deseja excluir - se nao quiser excluir nenhum elemento basta colocar 0, o que vc deseja adicionar - se nao quiser adicionar nenhum elemento basta nao coloca nada). a partir do indice 1 exclua um elemento: o proprio indice 1 ('Livia')
console.log(aprovados) // Vai imprimir [ 'Teresa', 'Elemento1', 'Elemento2', 'Livia' ]
