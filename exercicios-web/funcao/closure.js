// Closure é o escopo criado quando uma funcao é declarada ---> memoria do local em que a funcao foi definida. o escopo (local e global) que abrange a funcao tambem vai junto com a mesma. quando vc acessa ou executa a funcão em outro contexto totalmente diferente ela tem memoria do local de suas origens.  
// Este contexto permite à funcao acessar e manipular variaveis externas à funcao

// Closure em acao!

const x = 'Global' // Global do ponto de vista do arquivo, mas nao do ponto de vista do Node (arquivo representa apenas um modulo!).

function fora() {
    const x = 'Local' // se não houvesse a definicao do valor de x no contexto lexico da funcao fora dentro() usaria o valor do escopo "global"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora() // o returno da funcao fora vai ser a funcao dentro que esta sendo armazenada na variavel minhaFuncao
console.log(minhaFuncao()) // vai retornar Local, pois a variavel x esta declarada no mesmo contexto da funcao dentro
