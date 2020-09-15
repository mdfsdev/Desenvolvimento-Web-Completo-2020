// Object.preventExtensions: pode alterar os atributos já existentes, mas nao pode adicionar novos atributos. pode deletar.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal: nao consegue adicionar nem remover atributos. consegue alterar os valores dos atributos ja existentes
const pessoa = { nome: 'Barbara', idade: 32 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze: nao consegue adicionar, remover, nem alterar

