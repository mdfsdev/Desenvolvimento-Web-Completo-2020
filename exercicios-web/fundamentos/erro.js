function tratarErroELancar(erro) {
    // throw == lancar
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    //objeto:
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try { // try é um bloco de codigo que dentro dele tem um codigo que vc acha que pode gerar algum tipo erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // se ocorrer erro, o mesmo será capturado, sendo executado o código dentro do bloco
        tratarErroELancar(e)
    } finally { // bloco finally será executado se ocorrer erro ou não
        console.log('Final')
    }
}

const obj = { nome: 'Welliton' } // nome e não name!
imprimirNomeGritado(obj)