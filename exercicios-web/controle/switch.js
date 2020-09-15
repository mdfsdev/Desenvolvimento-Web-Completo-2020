// switch é um mecanismo de selecao multipla. nao e uma expressao relacional. 
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // nao retorna true ou false, mas sim um valor
        case 10: // caso entre no case 10 ou 9 executa a mesma senteca de codigo. como case 10 nao tem setencas de codigo nem tem o break, caso o valor for 10, ele caira no case seguinte (case 9), que tem sentenca de codigo e tem o break!
        case 9: 
            console.log('Quadro de Honra') // se for 10 ou 9 executa esta sentenca de codigo!
            break // se entrar no 10 ou 9 sai do bloco de código, evita que os códigos subsequentes sejam executados por padrao. COmente os breaks do codigo e execute para vc ver!
        case 8: case 7: // mesma coisa do case 10 e case 9, mas escritos na mesma linha! Msm coisa!
            console.log('Aprovado')
            break
        case 6: case 5: case 4: // case nao aceita valor decimal, intervalos (case 6-4), vírgula (case 6, 5, 4:)
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0: { // pode usar chaves se quiser!
            console.log('Reprovado')
            break
        }
        default: // caso valor nao se enquadre em nenhum dos cases!Pode ficar em qualquer posicao, desde que utilize o break (se ficar na ultima posicao, nao precisa!).
            console.log('Nota inválida')
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9) // vai arrendondar para 8
imprimirResultado(6.55) // vai arredondar para 6
imprimirResultado(2.3) //  vai arredondar para 2
imprimirResultado(-1) // valor inválido
imprimirResultado(11) // valor inválido