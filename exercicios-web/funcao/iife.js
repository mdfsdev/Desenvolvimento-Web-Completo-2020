// IIFE --> Imediately Invoked Function Expression
// Padrão muito usado quando voce quer fugir de manipular no escopo global. Tudo que voce criar dentro da funcao vai ser escopo local dentro da funcao e nao escopo global, isso pode te ajudar a vc evitar estar manipulando coisas diretamente no escopo global do browser, evitar manipulacoes indevidas que propriciam bugs em sua aplicacao.
// O escopo global (window no browser) é compartilhado por todos os scripts que rodam no browser vcdeve ter um cuidado muito grande ao manipular coisas diretamente dentro de window
// Uma das formas de evitar isso e utilizar o IIFE

// sintaxe da iife:
// (function() {
//     //comandos
// })() 

(function() {
    // window.a = '...' // <-- se fizer algo semelhante vc estara deliberadamente acessando o objeto global!
    console.log('Será executado na hora, sem a necessidade de invocar a funcao (já é feita já na sua criacao)')
    console.log('Foge do escopo mais abrangente!')
})()

// a iife acima é semelhante a executar diretamente os códigos abaixo, mas tudo o que vc fizer desta última maneira estará tocando diretamente o escopo global
// console.log('Será executado na hora, sem a necessidade de invocar a funcao (já é feita já na sua criacao)')
// console.log('Foge do escopo mais abrangente!')