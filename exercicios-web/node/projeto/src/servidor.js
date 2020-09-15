const porta = 3003 // porta que vamos ficar escutando a aplicacao
// importacoes
const express = require('express')
const app = express() // instanciando express chamando a funcao express e atribuindo a variavel app
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados') // import do bancoDeDados


app.use(bodyParser.urlencoded({ extended: true })) // vai ser disparado para todas as requisicoes no servidor utilizando o express. bodyParser é uma funcao middleware???? urlencoded vai retornar uma funcao middleware????

// app.get('/produtos', (req, res, next) => { 
//     console.log('Middleware 1...') // vai ser impresso no console
//     next() // se nao tivesse next() nao executaria a proxima middleware que envia a resposta do servidor
// }) 

// vamos construir nossos servicos em cima da variavel app
// get e uma forma de requisicao
app.get('/produtos', (req, res, next) => { // estamos passando como resposta para a requisicao em cima de '/produtos' uma funcao middleware // nao estamos chamando o parametro funcao? next poderiamos suprimi-lo
    res.send(bancoDeDados.getProdutos()) // res.send({ nome: 'Notebook', preco: 4259.50 }) // estamos mandando como resposta um objeto que vai ser convertido automaticamente para o formato JSON
}) 

app.get('/produtos/:id', (req, res, next) => { // '/produtos/:id' <-- nao significa que iremos digitar isto na url, significa que vamos digitar /produtos/(numero que representa o id do produto). vai retornar um produto especifico baseado no id
    res.send(bancoDeDados.getProduto(req.params.id))
}) 

// post para enviar
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})

// put para alterar valores ja existentes
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // vai gerar um JSON
})

// porta que vamos ficar escutando a aplicacao
app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}.`)
})
