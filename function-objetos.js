function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1)
console.log(p2)