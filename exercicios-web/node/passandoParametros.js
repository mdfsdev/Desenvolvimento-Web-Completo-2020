module.exports = function(...nomes) { // funcao que recebe argumento variavel
    return nomes.map(nome => `Bom fds ${nome}!`) // metodo ira transformar uma lista de nomes em uma lista de saudacoes
}