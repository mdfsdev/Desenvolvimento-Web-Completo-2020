const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios e um client http, faz requisicoes para obter informacoes de algo que esta remoto

const chineses = f => f.pais === 'China' // funcao que retorna todos os funcionarios chineses
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual // retornar o menor salario
 }


axios.get(url).then(response => { // get e um metodo do protocolo http que obtem informacoes do servidor
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})
 