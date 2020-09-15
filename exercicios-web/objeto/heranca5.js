console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Cubanacan'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Não faca isso (substituir funcoes ja existentes no prototipo de uma funcao/na API do JS):
String.prototype.toString = function() {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse()) // vai inverter 'Lascou tudo'