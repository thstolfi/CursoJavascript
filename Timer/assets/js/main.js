const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0;
let timer;

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciarTimer()
})
pausar.addEventListener('click', function(event){
    pausarTimer()
    clearInterval(timer);
})
zerar.addEventListener('click', function(event){
    zerarTimer()
    clearInterval(timer);
    segundos = 0;
})

function iniciarTimer(){
    relogio.style.color = 'black'
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}
function pausarTimer(){
    relogio.style.color = 'red'
}
function zerarTimer(){
    relogio.style.color = 'black'
    relogio.innerHTML = ('00:00:00')
}
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraDosSegundos(10))