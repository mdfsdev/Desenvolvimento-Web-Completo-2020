let contador = 1 // variavel que vai controlar o laco
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// equivale a:

for(let i = 1; i <= 10; i++) { // for(declaracao da variavel, expressao, incremento)
    console.log(`i = ${i}`)
}

const notas = [6.4, 3.1, 9.3, 7.7]
for(let i = 0; i < notas.length; i++) { // com o let a variavel ficara restrita ao escopo do for. para nao ter acesso a i.
    console.log(`nota = ${notas[i]}`)
}

 