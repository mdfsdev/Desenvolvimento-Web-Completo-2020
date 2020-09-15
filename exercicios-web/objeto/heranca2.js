// Cadeia de prototipos (prototype chain) 
Object.prototype.atrib0 = 'Y' // atribuindo um par chave-valor diretamente no Object.prototype. Usar esta forma com muito CUIDADO, pois Object.prototype é o protótipo pai de todos os seus objetos e isto pode afetá-los de maneira inadequada!
const avo = { atrib1: 'A'} // o avo tem como prototipo o Object.prototype
const pai = { __proto__: avo, atrib2: 'B', atrib3: 'C' } // o pai tem como prototipo o avo
const filho = { __proto__: pai, atrib3: 'C' } // o filho tem como prototipo o pai
console.log(filho.atrib3, filho.atrib2, filho.atrib1, filho.atrib0, filho.atrib4) // a busca pelo atributo se dá de baixo para cima (filho → pai → avo → Object.prototype)
// Sombreamento/Shadowing: a preferencia é ao valor que é primeiro encontrado na ordem de preferencia da busca na cadeia de prototipos

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= velMaxima) { // validacao
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 315 // shadowing sobre velMaxima do objeto carro
}

const lamborguini = {
    modelo: 'Aventator',
    status() {
        return `${this.modelo}: ${super.status()}` // this → faz referencia ao objeto atual. super → faz referencia ao prototipo do objeto
    }
}
// Estabelecendo as relacoes de prototype
Object.setPrototypeOf(ferrari, carro) // equivalente a colocar, no objeto ferrari, o atributo __proto__: carro  
Object.setPrototypeOf(lamborguini, carro)

console.log(ferrari, lamborguini) // imprime apenas os atributos e metodos que pertecem de fato à ferrari

lamborguini.acelerarMais(130)
console.log(lamborguini.status())

ferrari.acelerarMais(280)
console.log(ferrari.status())