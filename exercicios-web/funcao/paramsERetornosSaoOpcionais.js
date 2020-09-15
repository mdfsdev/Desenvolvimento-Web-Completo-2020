// funcao sem sentido, apenas para ilustrar que podemos ter retorno apenas em uma parte da funcao
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else {
        return area // returno apenas se area < 20
    }
}

console.log(area(2, 2))
console.log(area(2)) // 1 parametro: 2, 2 parametro: undefined. number * undefined = NaN
console.log(area()) // NaN
console.log(area(2, 3, 8, 83)) // vai pegar apenas os dois primeiros parametros
console.log(area(5, 5)) // retorno undefined
