let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // true
comparaComThis(this) // false  "o this não e o this"

const obj = {}
comparaComThis = comparaComThis.bind(obj) // associando o this da funcao ao objeto criado (obj)

comparaComThis(global) // vai dar falso
comparaComThis(obj) // vai dar true

comparaComThisArrow = param => console.log(this === param) // nao aponta para o global. aponta para o modulo corrente (contexto lexico)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true
comparaComThisArrow(this) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false: arrow function > bind. o bind nao consegue mudar a referencia do this na arrow function.
comparaComThisArrow(module.exports) // true. nao consegue forcar uma mudanca de contexto.