/* const nome = 'Fulano Ciclano'
console.log(nome[4]) */

const alunos = ['Luiz', 'Maria', 'Joao'];
console.log(alunos)

// SLICE
console.log(alunos.slice(0,2))

// DELETA UM ELEMENTO
delete alunos[1]

// REMOVE O PRIMEIRO ELEMENTO
alunos.shift()

// REMOVE O ÚLTIMO ELEMENTO
alunos.pop()

// RETORNA O ELEMENTO REMOVIDO
const removido = alunos.pop()
console.log(removido)

// ADICIONAR NO COMEÇO DO ARRAY
alunos.unshift('Otávio')

// ADICIONAR NO FINAL DO ARRAY
alunos.push('Ronaldo')

// EDITAR ARRAY
alunos[0] = 'Pedro';
console.log(alunos)