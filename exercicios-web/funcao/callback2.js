const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar o callback
let notasBaixas = [] // com let pode sobrescrever/alterar mais a frente
for (let i in notas) {
    if (notas[i] <7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notasBaixas.filter(function(nota) { // callback: funcao e chamada para cada elemento do array
    return nota < 7 // vai retornar true ou false. 
})

console.log(notasBaixas2)

// Com arrow function (mais enxuta)
const notasMenoresQue7 = nota => nota < 7 // para ficar mais elegante
const notasBaixas3 = notasBaixas.filter(notasMenoresQue7) // vai retornar true ou false, se for true a o valor nota irá para notasbaixas2

console.log(notasBaixas3)