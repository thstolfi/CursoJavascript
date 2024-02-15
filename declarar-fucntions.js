// Declaração de Function (Function Hoisting)
falaOi();
function falaOi(){
    console.log("Oi");
}

// First class objects - function expression
const souUmDado = function(){
    console.log("Sou um dado");
};
souUmDado()

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log("Olá")
    }
}
obj.falar()