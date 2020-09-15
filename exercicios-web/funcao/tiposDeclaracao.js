console.log(soma(3, 5)) // *** JS vai printar mesmo que a chamada da funcao esteja antes de sua definicao, apenas neste caso (function declaration)
// function declaration: melhor forma, JS carrega todas as funcoes declaradas desta maneira antes de rodar o codigo (veja a sentenca acima)
function soma(x, y) {
    return x + y
}



// console.log(sub(7, 2)) // vai dar erro. ReferenceError: Cannot access 'sub' before initialization
// function expression: atribuir uma funcao anonima a uma variavel
const sub = function(x, y) {
    return x - y
}
console.log(sub(7, 2)) // vai rodar


// console.log(mult(5, 6)) // vai dar erro. ReferenceError: Cannot access 'sub' before initialization
// named function expression (pouco usada, pode ser util durante o debug do codigo)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(5, 6)) // vai rodar