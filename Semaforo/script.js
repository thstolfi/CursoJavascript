let sinal = 0;
function changeColor() {
    const luzVerm = document.getElementById('red');
    const luzAma = document.getElementById('yellow');
    const luzVerd = document.getElementById('green');
    const luzes = document.querySelectorAll('.luz');

    luzes.forEach(luz => luz.classList.remove('red', 'yellow', 'green'));

    if (sinal === 0) {
        luzVerm.classList.add('red');
        sinal = 1;
    } else if (sinal === 1) {
        luzAma.classList.add('yellow');
        sinal = 2;
    } else {
        luzVerd.classList.add('green');
        sinal = 0;
    }
}

setInterval(changeColor, 2000);