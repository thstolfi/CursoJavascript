function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO]: Verifique os dados e tente novamente')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'man1.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'man2.png')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'man3.png')
            }else{
                img.setAttribute('src', 'man4.png')
            }
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'woman1.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'woman2.png')
            }else if(idade >= 21 && idade < 50){
                img.setAttribute('src', 'woman3.png')
            }else{
                img.setAttribute('src', 'woman4.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}