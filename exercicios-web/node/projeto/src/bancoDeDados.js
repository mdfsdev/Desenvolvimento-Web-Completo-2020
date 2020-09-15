// criando um objeto que vai representar uma sequencia pra pegar os ids dos objetos que vamos persistir
const sequence = {
    _id: 1, // atributo interno do objeto
    get id() { return this._id++ } // funcao get que vai retornar o id de fato.qd formos chamar o id nao precisamos chamar a funcao. simplesmente utilizamos o conceito de propriedade (chamamos o atributo e internamente ele vai disparar a funcao) ????
}

const produtos = {} // objeto vai ter como chave cada um dos ids de cada um dos produtos os valores serao os proprios produtos

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id // se o id do produto nao estiver setado produto.id ira receber sequence.id
    produtos[produto.id] = produto
    return produto
}

//funcao para pegar o produto pelo id
function getProduto(id) {
    return produtos[id] || {}
}

// funcao para retornar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produtoExcluido = produtos[id]
    delete produtos[id]
    return produtoExcluido
}

// como este arquivo e um modulo do node por enquanto todas estas funcoes estao visiveis apenas dentro deste modulo, para torna-las visiveis para fora deste arquivo precisamos exporta-las

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } // tres funcoes estao visiveis para fora do arquivo, mas objeto sequence e algo interno deste modulo e nao esta visic=vel fora do modulo bancoDeDados