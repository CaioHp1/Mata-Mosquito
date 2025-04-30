var largura = 0
var altura = 0
var vidas = 1
var tempo = 30

function AdaptarTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight


    console.log(altura, largura)
}
AdaptarTamanho()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo <= 0) {
       
         window.location.href = 'Vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)
function Pocisaoaleatoria() {
    

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas >= 3) {
            window.location.href = 'fimdejogo.html'
        }
        else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }

    }

    var posicaox = Math.floor(Math.random() * altura) - 90
    var posicaoy = Math.floor(Math.random() * largura) - 90
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    console.log(posicaox, posicaoy)


    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = AlterarTamanho() + ' ' + AlterarLado()
    mosca.style.left = posicaoy + 'px'
    mosca.style.top = posicaox + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }
    

    document.body.appendChild(mosca)
    console.log(AlterarTamanho())
    console.log(AlterarLado())

    
   
}

function AlterarTamanho() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function AlterarLado() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}
