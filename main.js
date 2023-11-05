//criação do coração do nosso game

//encontrando a altura e largura do browser

let = 0
let = 0
let vidas = 1
let tempo = 10
let nivel = window.location.search
nivel = nivel.replace('?' , '')

let criaMosquitoTempo = 1500

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {    
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
} 
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function() {
    tempo -= 1

    if( tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
  
    
}, 1000)

//criar a imagem de forma aleatória
function posicaoRandomica(){

//remover o mosquito anterior caso exista
if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

    if(vidas > 3) {

        window.location.href='fim_de_jogo.html'
    } else {    
        document.getElementById('v' + vidas).src='imagens/imagens/coracao_vazio.png'
        vidas++
    }
}

let posicaoX = Math.floor(Math.random() * largura) - 90
let posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
console.log(posicaoX,posicaoY)

//criar o elemento HTML mosquito de forma dinâmica
let mosquito = document.createElement('img')
mosquito.src = 'imagens/imagens/mosca.png'
document.body.appendChild(mosquito)
mosquito.className = tamanhoAleatorio()  + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}

document.body.appendChild(mosquito)
}

// criacao de tamanhos variados de mosquito
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2' 

        case 2:
            return 'mosquito3'

    }    
}

//posicinar o mosquito de forma aleatoria no browser

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB' 
    }    
}

//fim do coração do game



  

