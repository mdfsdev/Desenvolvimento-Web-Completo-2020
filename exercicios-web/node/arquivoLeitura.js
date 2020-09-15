const fs = require('fs') // filesystem e um modulo core do node (já vem instalado de maneira previa junto com o node)
                         // aqui requeremos o fs
const caminho = __dirname + '/arquivo.json' // <--- ao inves de utilizar o absolute path. mais vantajoso pq independente do local onde vc coloque seu modulo do node eonde esteja executando ele conseguira pegar o diretorio atual e consegue navegar de uma forma absoluta a partir do diretorio atual
// The directory name of the current module. This is the same as the path.dirname() of the __filename.
// https://nodejs.org/docs/latest/api/modules.html#modules_dirname
// __dirname e uma constante que esta presente em todos os modulos do node e representa o diretorio atual


// lendo um arquivo de maneira SINCRONA (i/o sincrono)
// se for um arquivo pesado podera travar o event loop
// nao e recomendado pois so depois de ler completamente o arquivo que o event loop sera liberado (outros processos ficarao pendentes?)

const conteudo = fs.readFileSync(caminho, 'utf-8') // enconding de leitura deve ser o mesmo que o de escrita no editor de texto UTF-8
console.log(conteudo)

// leitura ASSÍNCRONA (mais interessante)
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // só se a variavel err estiver vazia que teremos acesso ao conteudo do arquivo lido. 3 parametro e uma funcao callback
    const config = JSON.parse(conteudo) // apenas const config = conteudo retorna uma string e codigo gera um erro
    console.log(`${config.db.host}: ${config.db.port}`) // interpolacao na template string so vai funcionar se config for um objeto. este console.log foi executado depois do console.log abaixo (executou de maneira assincrona, so imprime depois de ler o arquivo)
})

// ESPECIFICAMENTE PARA UM ARQUIVO do tipo JSON temos uma forma mais simples de leitura:

const config = require('./arquivo.json') // neste caso somos obrigados a passar a extensao do arquivo, pois por padrao seria .js 
console.log(config.db)                   // aqui requeremos o arquivo diretamente (./arquivo.js). ja tras o arquivo .json convertido em objeto!


// leitura de uma DIRETORIO
// lembre-se fs é o modulo filesystem!
// codigo abaixo ira retornar um arrat com todos os arquivos presentes no diretorio atual __dirname
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})