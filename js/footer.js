const HEADER = document.querySelector('header')
const MAIN = document.querySelector('main')
const SECTION = document.querySelector('section')
const FORM = document.querySelector('form')
const FOOTER = document.querySelector('footer')

const DIV = document.querySelectorAll('div')[2]
const H1 = document.querySelectorAll('h1')[2]
const IMG = document.querySelectorAll('img')[1]

function divPresente(){
    if(DIV!==null){
        const IFRAME = document.querySelector('iframe')
        if(IFRAME!==null){
            const LOCAL = DIV.offsetHeight //Altura del DIV que contiene al mapa de la plantilla LOCAL y al elemento Bootstrap
            return LOCAL
        }
    }
}

function nuestroLocal(){
    if(LOCAL!==null){
        const H1_HEIGHT = H1.offsetHeight
        return H1_HEIGHT
    }
}

function miFoto(){
    if(IMG!==undefined){
        if(IMG!==null){
            const IMG_ALTO = IMG.offsetHeight
            return IMG_ALTO
        }
    }
}

const LOCAL = divPresente()
const H1_HEIGHT = nuestroLocal()
const IMG_ALTO = miFoto()

const SECTION_HEIGHT = SECTION.offsetHeight

function formularioPresente(){
    if(FORM!==null){
        const FORM_HEIGHT = FORM.offsetHeight
        return FORM_HEIGHT
    }
}

const FORM_HEIGHT = formularioPresente()

if(FORM!==null){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + FORM_HEIGHT - SECTION_HEIGHT + 200 + 'px'
}

if(LOCAL!==null && LOCAL!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + H1_HEIGHT + 'px'
}

if(IMG!==null && IMG!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + 40 + 'px'
}

if(document.querySelectorAll('.consolas').length > 15){
    const COLUMNA_ALTO_CONSOLAS = document.querySelectorAll('.consolas')
    const ALTO_H2 = document.querySelectorAll('h2')
    let tamanio=0
    for (let index = 1; index < COLUMNA_ALTO_CONSOLAS.length; index++) {
        tamanio=tamanio+COLUMNA_ALTO_CONSOLAS[index].offsetHeight
    }
    for (let index = 1; index < ALTO_H2.length; index++) {
        tamanio=tamanio+ALTO_H2[index].offsetHeight        
    }
    MAIN.style.height= HEADER.offsetHeight + MAIN.offsetHeight + tamanio + 'px'

    if(window.innerWidth < 767){
        FOOTER.style.height='400px'
    }
}

if(window.innerWidth < 767) {
    if(window.location.pathname=='/index.html' || window.location.href=='http://127.0.0.1:5500/' || window.location.href=='http://127.0.0.1:5500/index.html'){
        SECTION.style.height='100vh'
    }
    if(window.location.pathname=='/pages/ubicacion.html' || window.location.pathname.indexOf('retro_games/pages/ubicacion') > 0){
        FOOTER.style.position='absolute'
        FOOTER.style.bottom=0
        FOOTER.style.zIndex=0
        SECTION.style.height='80vh'
        document.querySelector('div').style.zIndex=1
    }
    if(window.location.pathname=='/pages/acerca.html' || window.location.pathname.indexOf('retro_games/pages/acerca') > 0){
        FOOTER.style.position='absolute'
        FOOTER.style.bottom=0
        FOOTER.style.zIndex=0
        SECTION.style.height='80vh'
        document.querySelector('div').style.zIndex=1
    }
}