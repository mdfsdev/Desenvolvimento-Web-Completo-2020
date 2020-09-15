let dobro = function(a) { // armazenando uma funcao numa variavel
    return 2 * a
}

dobro = (a) => { // redeclarando a variavel com uma arrow function
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function() { // se tem {} tem que colocar o return explicito
    return 'Olá'
}

ola = () => 'Olá' // nao tem param
ola = _ => 'Olá' // tem param: _    De acordo com a preferencia, forma mais reduzida

console.log(ola())