console.log('1) ', '1' == 1) // compara apenas os valores e não se preocupa com os tipos
console.log('2) ', '1' === 1) // compara apenas os valores e os tipos (estritamente iguais?)
console.log('3) ', '1' != 1) // Diferentes? Considera apenas os valores
console.log('4) ', '1' !== 1) // Estritamente diferentes? Considera os valores e tipos
console.log('5) ', 3 > 2)
console.log('6) ', 3 < 2)
console.log('7) ', 3 <= 2)
console.log('8) ', 3 >= 2)

const data1 = new Date(0) // 0 --> Data de referencia (marco zero) do JavaScript: 1 jan de 1970. Algumas outras linguagens também adotam esta data. Podem  haver variacoes devido ao fuso horario.
const data2 = new Date(0) 
console.log('9) ', data1 === data2) // Tanto faz usar == ou === Porque estamos comparando variaveis de referencia (referencia de memoria). O que estamos comparando será o endereco de memoria, portanto dará falso nos dois exemplos. Temos dois enderecos de memoria diferentes Data1 e Data2.
console.log('10) ', data1 == data2) 
console.log('11) ', Data1.getTime() === Data2.getTime()) // Dará true porque estamos comparando os valores em milisegundos desde a data de referencia (passar mouse em cima do metodo getTime para ver a descricao do mesmo)
console.log('12) ', undefined == null)
console.log('13) ', undefined === null)
// No geral, é melhor vc utilizar o estritamente igual