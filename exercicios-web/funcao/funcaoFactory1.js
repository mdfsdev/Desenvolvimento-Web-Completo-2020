// Factory e uma funcao que sempre retorna um novo objeto (nova instancia). NÃO utiliza o operador new! <----
// Objetivo de fabricar (factory) uma nova instancia de um objeto
// Pode utilizar parametros para personalizar a criacao de objetos
// Factory simples:
function criarPessoa() {
    return { // o retorno da funcao criarPessoa() é um objeto
        nome: 'Ana', // parametros fixos
        idade: 'Silva'
    }
}

console.log(criarPessoa())