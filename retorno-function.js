function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olamundo = falaFrase('Olá');
console.log(olamundo('mundo!'));