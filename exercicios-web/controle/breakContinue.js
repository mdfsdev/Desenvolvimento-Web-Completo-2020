// break causa um desvio de fluxo: sair de um ponto, pular algumas linhas e ir para outro ponto
// O break nao influencia em um codigo do tipo if. Influencia no switch e nas estruturas de repeticao: lacos for e while
// O continue funciona apenas em estruturas de repeticao: lacos for ou while

const nums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

for (x in nums) {
    if(x == 5) {
        break // nao age sobre o bloco if agira sobre o switch/for/while mais proximo. sai do laco suportado mais próximo (laco for).
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) continue // quando tem apenas uma sentenca de codigo pode ser colocado sem chaves para indicar o bloco. interrompe a repeticao corrente (y = 5) e vai para a proxima repeticao (y = 6): pula do indice y = 4 para o indice y = 6. continua no laco suportado mais proximo. O continue so faz sentido agir sobre estruturas de repeticao.
    console.log(`${y} = ${nums[y]}`)
}

// nao use esta estrutura. lembra muito a epoca do go-to da programacao estruturada
externo: for (a in nums) { // a representa o indice do array nums
    for (b in nums) { // b tb representa o indice do array nums
        if(a == 2  && b == 3) break externo // break rotulado. vai agir nao mais sobre o laco for mais proximo, mas sim sobre o laco for rotulado (no caso, rotulado como "externo")
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')