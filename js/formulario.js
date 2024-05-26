const FORMULARIO = document.querySelector('form')
const SECCION = document.querySelector('section')
const ENVIO = document.getElementById('send')
const NOMBRE = document.getElementById('nombre')
const APELLIDO = document.getElementById('apellido')
const SEXO = document.getElementsByClassName('sexo')
const HOBBIES = document.querySelectorAll('input[type=checkbox]')
const NUMERO = document.getElementById('numero')
const VALIDAR_EMAIL = document.getElementById('email')
const DOMICILIO = document.getElementById('domicilio')
const DESCRIPCION = document.getElementById('descripcion')

NOMBRE.addEventListener('focus', () => {
    NOMBRE.style.color = 'red'
    NOMBRE.addEventListener('input', () => {
        if (NOMBRE.value.length < 3) {
            NOMBRE.style.borderRadius = '8px'
            NOMBRE.style.border = '5px solid red'
        } else {
            NOMBRE.style.color = 'black'
            NOMBRE.removeAttribute('style')
        }
    })
})

NOMBRE.addEventListener('blur', () => {
    NOMBRE.removeAttribute('style')
})

APELLIDO.addEventListener('focus', () => {
    APELLIDO.style.color = 'red'
    APELLIDO.addEventListener('input', () => {
        if (APELLIDO.value.length < 3) {
            APELLIDO.style.borderRadius = '8px'
            APELLIDO.style.border = '5px solid red'
        } else {
            APELLIDO.style.color = 'black'
            APELLIDO.removeAttribute('style')
        }
    })
})

APELLIDO.addEventListener('blur', () => {
    APELLIDO.removeAttribute('style')
})

NUMERO.addEventListener('focus', () => {
    NUMERO.style.color = 'red'
    NUMERO.addEventListener('input', () => {
        if (NUMERO.value.length < 3) {
            NUMERO.style.borderRadius = '8px'
            NUMERO.style.border = '5px solid red'
        } else {
            NUMERO.style.color = 'black'
            NUMERO.removeAttribute('style')
        }
    })
})

NUMERO.addEventListener('blur', () => {
    NUMERO.removeAttribute('style')
})

VALIDAR_EMAIL.addEventListener('focus', () => {
    VALIDAR_EMAIL.style.color = 'red'
    VALIDAR_EMAIL.addEventListener('input', () => {
        if (VALIDAR_EMAIL.value.indexOf('@') < 0) {
            VALIDAR_EMAIL.style.borderRadius = '8px'
            VALIDAR_EMAIL.style.border = '5px solid red'
        } else {
            if(VALIDAR_EMAIL.value.length > 5){
                VALIDAR_EMAIL.style.color = 'black'
                VALIDAR_EMAIL.removeAttribute('style')
            }
        }
    })
})

VALIDAR_EMAIL.addEventListener('blur', () => {
    VALIDAR_EMAIL.removeAttribute('style')
})

var enviar = false

ENVIO.addEventListener('click', (event) => {
    event.preventDefault()
    enviar = true
    if (enviar) {
        for (let index = 0; index < FORM.length; index++) {
            if (FORMULARIO[index].type === 'text' || FORMULARIO[index].type === 'email' || FORMULARIO[index].type === 'number' || FORMULARIO[index].type === 'textarea') {
                if (FORMULARIO[index].value == '') {
                    FORMULARIO[index].style.borderRadius = '8px'
                    FORMULARIO[index].style.border = '2px solid red'
                }
            }
        }
        let CONTADOR=0
        for (let index = 0; index < HOBBIES.length; index++) {
            if(HOBBIES[index].checked === false){
                CONTADOR = CONTADOR++
            }
            if(CONTADOR==HOBBIES.length-1){
                alert('Ningun hobbie a elegir?')
            }
        }
    }
    document.querySelector('h3').style.display=''
})

SECCION.addEventListener('mouseover', () => {
    function limpiar() {
        if (enviar) {
            for (let index = 0; index < FORMULARIO.length; index++) {
                if (FORMULARIO[index].type === 'text' || FORMULARIO[index].type === 'email' || FORMULARIO[index].type === 'number' || FORMULARIO[index].type === 'textarea') {
                    if (FORMULARIO[index].value == '') {
                        FORMULARIO[index].removeAttribute('style')
                    }
                }
            }
        }
        enviar = false
        document.querySelector('h3').style.display='none'
    }
    setTimeout(limpiar, 3000)
})