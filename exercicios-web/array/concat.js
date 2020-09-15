const filhas = ['Helena', 'Vitória', 'Rebeca']
const filhos = ['Heitor', 'Alfredo', 'João']
const todos = filhas.concat(filhos, 'Heleno', 'Gustavo')
console.log(todos, filhos, filhas)

const todasFilhas = ['Ana', 'Maria'].concat(filhas) // vc pode concatenar um array vazio com outro? [].concat([x, y, z])
console.log(todasFilhas, filhas)

const nums = [1, 2, 3, 4, 5]
const todosNums = nums.concat([6, 7], [8, 9], 10, [[11, 12]]) // [[]] <--- matriz
console.log(todosNums)
