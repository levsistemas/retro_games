const ANIMACION = document.getElementById('animacion')
const MOVIMIENTO = document.getElementById('movimiento')
const TRANSFORMACION = document.getElementById('transformacion')

function aparecerDiv() {
    ANIMACION.style.opacity = 1
}

function desaparecerDiv() {
    ANIMACION.style.opacity = 0
}

blinkOff()

RESULTADO=1

function blinkOn() {
    const ENCENDER = setInterval(() => {
        RESULTADO += 0.1
        ANIMACION.style.opacity = RESULTADO
        if (ANIMACION.style.opacity == 1) {
            clearInterval(ENCENDER)
            blinkOff()
        }
    }, 250)
}

function blinkOff() {
    const APAGAR = setInterval(() => {
        RESULTADO -= 0.1
        ANIMACION.style.opacity = RESULTADO
        if (ANIMACION.style.opacity <= 0) {
            RESULTADO=0
            clearInterval(APAGAR)
            blinkOn()
        }
    }, 250)
}

let posicionActual = 0

function moverDerecha() {
    const INTERVALO = setInterval(() => {
        posicionActual += 5
        MOVIMIENTO.style.left = posicionActual + 'px'
        const TAMANIO_H2 = document.querySelectorAll('h2')[1].clientWidth
        const ANCHO_SECTION = document.querySelector('Section').offsetWidth
        if (posicionActual >= (ANCHO_SECTION - TAMANIO_H2-1)) {
            clearInterval(INTERVALO)
            moverIzquierda()
        }
    }, 25)
}

function moverIzquierda() {
    const INTERVALO = setInterval(() => {
        posicionActual -= 5
        MOVIMIENTO.style.left = posicionActual + 'px'
        if (posicionActual <= 0) {
            clearInterval(INTERVALO)
            moverDerecha()
        }
    }, 25)
}

moverDerecha()

const COLORES = ['red', 'green', 'blue', 'yellow']
const COLOR = ['cyan', 'purple', 'orange', 'black']
let indiceColor = 0

function cambiarColor() {
    TRANSFORMACION.style.backgroundColor = COLORES[indiceColor]
    TRANSFORMACION.style.color = COLOR[indiceColor]
    indiceColor = (indiceColor + 1) % COLORES.length
}

setInterval(cambiarColor, 1000)

if(window.innerWidth < 767){
    document.querySelectorAll('h2')[1].innerHTML='LEVSISTEMAS'
    document.querySelectorAll('h2')[2].innerHTML='SEAN BIENVENIDOS'
}