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

console.log('Altura Div: ' + LOCAL + 'px')

const WINDOW_INNER = window.innerHeight
const SECTION_HEIGHT = SECTION.offsetHeight

function formularioPresente(){
    if(FORM!==null){
        const FORM_HEIGHT = FORM.offsetHeight
        console.log(FORM_HEIGHT)
        return FORM_HEIGHT
    }
}

const FORM_HEIGHT = formularioPresente()

const PIXEL_HEIGHT = WINDOW_INNER*100
console.log('Window Inner: ' + WINDOW_INNER)

console.log('Pixel Height: ' + PIXEL_HEIGHT)

console.log('header: ' + HEADER.offsetHeight)
console.log('main: ' + MAIN.offsetHeight)
console.log('footer: ' + FOOTER.offsetHeight)
console.log('Section: ' + SECTION_HEIGHT)

if(FORM!==null){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + FORM_HEIGHT - SECTION_HEIGHT + 200 + 'px'
}

if(LOCAL!==null && LOCAL!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + H1_HEIGHT + 'px'
}

if(IMG!==null && IMG!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + 40 + 'px'
    // MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + document.querySelector('p').offsetHeight + 'px'
}

console.log('Altura main: ' + MAIN.style.height)

if(window.location.pathname=='/pages/consolas.html'){
    console.log('estamos en consolas ' + window.location.pathname)
    // MAIN.style.height='5300px'
}

if(document.querySelectorAll('.consolas').length > 15){
    const COLUMNA_ALTO_CONSOLAS = document.querySelectorAll('.consolas')
    const ALTO_H2 = document.querySelectorAll('h2')
    let tamanio=0
    for (let index = 1; index < COLUMNA_ALTO_CONSOLAS.length; index++) {
        console.log(COLUMNA_ALTO_CONSOLAS[index].offsetHeight)
        console.log(index + ':' + tamanio)
        tamanio=tamanio+COLUMNA_ALTO_CONSOLAS[index].offsetHeight
    }
    console.log('HACIENDO UN ESPACIO')
    for (let index = 1; index < ALTO_H2.length; index++) {
        console.log(index + ':' + tamanio)
        tamanio=tamanio+ALTO_H2[index].offsetHeight        
    }
    console.log('COMENCEMOS!!! ')
    console.log('HEADER: ' + HEADER.offsetHeight)
    console.log('MAIN: ' + MAIN.offsetHeight)
    console.log('tamanio: ' + tamanio)

    MAIN.style.height= HEADER.offsetHeight + MAIN.offsetHeight + tamanio + 'px'
    console.log('TOTAL: ' + MAIN.style.height)

    if(window.innerWidth < 767){
        FOOTER.style.height='400px'
    }
}

if(window.innerWidth < 767) {
    if(window.location.pathname=='/index.html'){
        SECTION.style.height='100vh'
    }
    if(window.location.pathname=='/pages/ubicacion.html'){
        FOOTER.style.position='absolute'
        FOOTER.style.bottom=0
        FOOTER.style.zIndex=0
        SECTION.style.height='80vh'
        document.querySelector('div').style.zIndex=1
    }
    if(window.location.pathname=='/pages/acerca.html'){
        FOOTER.style.position='absolute'
        FOOTER.style.bottom=0
        FOOTER.style.zIndex=0
        SECTION.style.height='80vh'
        document.querySelector('div').style.zIndex=1
    }
}