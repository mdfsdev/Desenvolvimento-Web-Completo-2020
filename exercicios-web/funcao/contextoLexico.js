const valor = 'Global'

function minhaFuncao() {  // contexto lexico no qual esta funcao foi criada e o do arquivo contextoLexico.js que representa um modulo do Node, neste contexto de execucao
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // vai imprimir global. *** Qd uma funcao foi declarada no JS ela nao tem apenas seu conteudo, tem tambem consciencia do local em que foi declarada/definida, mesmo que ela esteja sendo invocada em um contexto totalmente diferente
