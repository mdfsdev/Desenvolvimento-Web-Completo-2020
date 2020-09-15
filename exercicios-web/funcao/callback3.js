// Exemplo de callback no browser (copiar, colar e executar no browser)
// Executar no browser <----

// document e a referencia dentro do browser que e disponivel globalmente dentro do seu codigo que aponta para sua pagina. (DOM)
document.getElementsByTagName('body')[0].onclick = function (e) { // a resposta da funcao getElementsByTagName() é um array por isso usamos [0] para acessar o elemento de indice zero neste array
    console.log('O evento ocorreu!')                              // a funcao recebe como parametro um evento. vc nao e obrigado a declarar o evento se nao for usá-lo.
}                                                                 // o evento vai ser o click do mouse e a cada clique a callback sera chamada
