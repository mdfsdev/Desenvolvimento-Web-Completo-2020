// apresentacao do padrao middleware ou chain of responsability: nao há acoplamento entre os passos
// importante pois este padrao e utilizado pelo (framework back-end?) express, mas o express quando utiliza este padrao usa 3 parametros (requis, resp, next)

// criando a primeira funcao middleware que recebe dois parametros (ctx, next)
// ctx e um objeto que carrega os dados (contexto) de um middleware para o outro (de um passo para o outro)
// next e uma funcao que quando chamada invocara o proximo passo na cadeia

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

// criando a segunda funcao middleware

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

// criando a terceira funcao middleware. nao precisa de next pois nao ha outro passo/funcao middle apos este!

const passo3 = ctx => ctx.valor3 = 'mid3'

// funcao que vai executar todos os middlewares e chamar o next, quando tiver (?)
// vai receber um contexto e um conjunto de funcoes middlewares

const exec = (ctx, ...middlewares) { // <--- operador rest(...)  passar varias funcoes e o operador junta isto dentro de um array chamado middlewares
    const execPasso = indice => { // outra funcao que recebe como parametro o indice que queremos executar
        middlewares && indice < middlewares.length && // se middlewares estiver preenchido sera true se tiver vazio sera false. resolve primeiro indice < middlewares.length para depois resolver o operador && (?)
            middlewares[indice](ctx, () => execPasso(indice + 1)) // temos uma execucao nesta linha // recursividade () => execPasso(indice + 1)  a funcao invoca a ela mesma no final mas com o indice incrementado//  middlewares[indice] vai retornar uma funcao e logo em seguida passamos os parametros (ctx, () => execPasso(indice + 1))
    }
    execPasso(0) // disparando a execucao do passo 0
}

ctx = {}
exec(ctx, passo1, passo2, passo3) // se passo3 estivesse com a ordem invertida em relacao a passo1 neste caso so haveria a execucao do passo3 pois ele nao possui o next
console.log(ctx)