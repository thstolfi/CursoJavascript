const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} teste`)
    }
}

const pessoa2 = pessoa1;
pessoa2.nome = 'Fabio'

console.log(pessoa1.nome)
console.log(pessoa2.nome)