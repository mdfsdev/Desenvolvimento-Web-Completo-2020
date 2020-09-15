// Destructuring em arrays

const [a] = [10] // Os colchetes em [a] (lado esquerdo da operacao), representam o operador desctructuring
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [3, 6, 8, 1] // n5 será undefined e n6 será 0 (valor padrão caso nao haja nenhum valor atribuído à variável)
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 9, 8], [9, 6, 8]] // Temos arrays dentro de arrays. Quando tem algo do tipo [, y] é para desconsiderar o primeiro elemento do array e considerar o segundo elemento. Exemplo pouco usado pois dificulta a leitura do codigo. Mais facil utilizar indices.