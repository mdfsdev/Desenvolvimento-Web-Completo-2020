const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})
aprovados.forEach((nome, indice) => console.log(indice)) // usando uma arrow function. se vc quiser ter acesso apenas ao indice vc tera que indicar o primeiro paramentro obrigatoriamente (no caso, o nome)

const exibirAprovados = aprovado => console.log(aprovado) // armazenando a arrow function em uma variavel para deixar a sintaxe da callback mais enxuta. funcao inline (1 linha?)

aprovados.forEach(exibirAprovados) // no contexto do metodo forEach aprovado será o valor. existe uma ordem predefinida dos parametros da funcao forEach: valor, indice e o proprio array.