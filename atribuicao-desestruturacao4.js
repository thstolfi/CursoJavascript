const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

/* const {nome: n = '', sobrenome} = pessoa;
console.log(n, sobrenome) */

const {endereco: {rua: r = 123, numero}, endereco} = pessoa;
console.log(r, numero, endereco)