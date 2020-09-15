
fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// callback: passar uma funcao para outra funcao e quando um determinado evento acontecer essa funcao que voce passou vai ser chamada/vai ser disparada de volta.
// essa funcao callback pode ser chamada uma unica vez ou apenas uma, vai depender do contexto no qual voce esta passando essa funcao
// todo array tem a funcao foreach() 
// para cada elemente do array o foreach vai passar o nome e o indice para a funcao imprimir: especie de loop
fabricante.forEach(imprimir)
fabricante.forEach(a => console.log(a)) // arrow function. `vai retornar undefined (?) (há um return implicito). vai imprimir o valor dos elementos do array, no caso, os fabricantes de automóveis

// outro exemplo de callback e uma requisicao ajax (?)