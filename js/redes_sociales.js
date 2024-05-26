const WHATSAPP = document.getElementsByClassName("fa-whatsapp")[0]
const FACEBOOK = document.getElementsByClassName("fa-facebook")[0]
const TWITTER = document.getElementsByClassName("fa-twitter")[0]
const IG = document.getElementsByClassName("fa-instagram")[0]
const DISCORD = document.getElementsByClassName("fa-discord")[0]
const EMAIL = document.getElementsByClassName("fa-regular")[0]

WHATSAPP.addEventListener('mousemove', () => {
    WHATSAPP.classList.remove('fa-whatsapp')
    WHATSAPP.classList.add('fa-square-whatsapp')
});

WHATSAPP.addEventListener('mouseout', () => {
    WHATSAPP.classList.remove('fa-square-whatsapp')
    WHATSAPP.classList.add('fa-whatsapp')
})

WHATSAPP.addEventListener('click', () => {
    const PESTANIA = window.open('https://whatsapp.com', '_blank')
})

FACEBOOK.addEventListener('mousemove', () => {
    FACEBOOK.classList.remove('fa-facebook')
    FACEBOOK.classList.add('fa-square-facebook')
});

FACEBOOK.addEventListener('mouseout', () => {
    FACEBOOK.classList.remove('fa-square-facebook')
    FACEBOOK.classList.add('fa-facebook')
})

FACEBOOK.addEventListener('click', () => {
    const PESTANIA = window.open('https://www.facebook.com', '_blank')
})

TWITTER.addEventListener('mousemove', () => {
    TWITTER.classList.remove('fa-twitter')
    TWITTER.classList.add('fa-x-twitter')
});

TWITTER.addEventListener('mouseout', () => {
    TWITTER.classList.remove('fa-x-twitter')
    TWITTER.classList.add('fa-twitter')
})

TWITTER.addEventListener('click', () => {
    const PESTANIA = window.open('https://www.twitter.com', '_blank')
})

IG.addEventListener('mousemove', () => {
    IG.classList.remove('fa-instagram')
    IG.classList.add('fa-square-instagram')
});

IG.addEventListener('mouseout', () => {
    IG.classList.remove('fa-square-instagram')
    IG.classList.add('fa-instagram')
})

IG.addEventListener('click', () => {
    const PESTANIA = window.open('https://www.instagram.com', '_blank')
})

DISCORD.addEventListener('click', () => {
    const PESTANIA = window.open('https://www.discord.com', '_blank')
})

EMAIL.addEventListener('mousemove', () => {
    EMAIL.classList.remove('fa-regular')
    EMAIL.classList.add('fa-solid')
});

EMAIL.addEventListener('mouseout', () => {
    EMAIL.classList.remove('fa-solid')
    EMAIL.classList.add('fa-regular')
})

EMAIL.addEventListener('click', () => {
    const PESTANIA = window.open('mailto:LEANDRO@CODAZOACODAZO.BUE.EDU.AR', '_blank')
})