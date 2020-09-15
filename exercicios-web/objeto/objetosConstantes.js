// pessoa -> 123 -> {...}
// A referencia do objeto (endereco de memoria) que é constante
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Lucas'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {
//     nome: 'Ana'
// }
// Voce nao pode reatribuir o valor de uma constante

Object.freeze(pessoa) // Torna o objeto, em si, constante
pessoa.nome = 'Júlia'
pessoa.endereco = 'Avenida Beberibe' 
delete pessoa.nome

console.log(pessoa)

// Criar um objeto constante desde o inicio
const pessoaConstante = Object.freeze({ nome: 'Sostenes' })
pessoaConstante.nome = 'Ícaro'
console.log(pessoaConstante.nome)
