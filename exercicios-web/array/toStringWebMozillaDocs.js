function Emprego(cargo, nivel, salario, empresa) {
    this.cargo = cargo,
    this.nivel = nivel,
    this.salario = salario,
    this.empresa = empresa
}
Emprego.prototype.toString = function() {
    var frase = `Consegui o cargo de ${this.cargo}, nível ${this.nivel}, com um salário de R$${this.salario} na empresa ${this.empresa}`
    return frase
}

novoEmprego2021 = new Emprego('Desenvolvedor SalesForce', 'Júnior', 2500, 'Accenture')
console.log(novoEmprego2021.toString())


// Ver se consigo fazer dar certo!
function Freelance(area, projeto, valor, contratante) { 
    this.area = area,
    this.projeto = projeto,
    this.valor = valor,
    this.contratante = contratante
}

Freelance.prototype.toString = function() {
    return Object.values(this) // nao funcionou quando criei a classe com uma funcao construtora (?)
}

novoFreelance2021 = new Freelance('Programacao Web', 'Plataforma EaD', 10000, 'Mauricea')
console.log(novoFreelance2021.toString())