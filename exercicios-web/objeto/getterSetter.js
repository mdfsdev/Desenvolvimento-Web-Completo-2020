// get e set sao utilizados para ler e manipular atributos privados (encapsulamento) de maneira mais controlada, que (teoricamente) nao podem ser acessadas diretamente.
// JS nao tem encapsulamento --> alteracao direta dos atributos
// get -> ler o valor de uma variavel
// set -> alterar o valor de uma variavel
// Metodos getters e setters --> se vc quiser interceptar a alteracao de um atributo para fazer algum tipo de controle/validacao


const sequencia = {
    _valor: 1, // convencao para variavel privada, apenas uma indicacao a outros desenvolvedores, nao torna a variavel como privada
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

// Ao inves de estar chamando o atributo o JS entende que vc esta chamando o metodo get e setter:
console.log('_valor ==', sequencia._valor,'_valor ==', sequencia._valor)
console.log(sequencia.valor, sequencia.valor) // get
sequencia.valor = 1000 // set
console.log('_valor ==', sequencia._valor, '_valor ==', sequencia._valor)
console.log(sequencia.valor, sequencia.valor) // get
sequencia.valor = 900 // set
console.log('_valor ==', sequencia._valor, '_valor ==', sequencia._valor)
console.log(sequencia.valor, sequencia.valor) // get
