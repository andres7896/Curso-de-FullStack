$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function ingreso() {

    var nombre = document.querySelector('#user').value
    var contraseña = document.querySelector('#pass').value
    var user = 'Andres'
    var pass = 'Andres97'

    localStorage.setItem('user', user)
    localStorage.setItem('pass', pass)

    if (localStorage.getItem('user') === nombre & localStorage.getItem('pass') === contraseña) {
        location.href = "index.html";
    }
}

var estrenos = [
    {
        imagen: 'img/bad.jpg',
        titulo: 'Bad Boys',
        clase: 'acción',
        formato: '2D'
    },
    {
        imagen: 'img/bird.png',
        titulo: 'Birds of Pride',
        clase: 'Heroes',
        formato: '3D'
    },
    {
        imagen: 'img/conjuro.jpg',
        titulo: 'El Conjuro 2',
        clase: 'terror',
        formato: '3D'
    },
    {
        imagen: 'img/hansel.jpg',
        titulo: 'Hansel & Gretel',
        clase: 'terror',
        formato: '2D'
    }
]

var contenedorEstrenos = document.querySelector('.estrenos')

estrenos.forEach(function (estreno) {
    contenedorEstrenos.innerHTML = contenedorEstrenos.innerHTML + `<div class="estreno">
                                                                        <img src="${estreno.imagen}" alt=""/>
                                                                        <h3>${estreno.titulo}</h3>
                                                                        <h4>${estreno.clase}</h4>
                                                                        <h4>${estreno.formato}</h4>
                                                                    </div>`
})

var cartelera = [
    {
        imagen: 'img/amenaza.jpg',
        titulo: 'Amenaza en lo profundo',
        clase: 'acción',
        formato: '3D'
    },
    {
        imagen: 'img/bob.jpg',
        titulo: 'Bob Esponja',
        clase: 'infantil',
        formato: '3D'
    },
    {
        imagen: 'img/gru.jpg',
        titulo: 'Los Minios',
        clase: 'infantil',
        formato: '3D'
    },
    {
        imagen: 'img/maldicion.jpg',
        titulo: 'La Maldición',
        clase: 'terror',
        formato: '2D'
    },
    {
        imagen: 'img/rapidos.jpg',
        titulo: 'Rapidos & Furiosos 9',
        clase: 'acción',
        formato: '2D'
    },
    {
        imagen: 'img/scooby.jpg',
        titulo: 'Scooby Doo',
        clase: 'infantil',
        formato: '3D'
    },
    {
        imagen: 'img/007.png',
        titulo: 'Agente 007',
        clase: 'acción',
        formato: '3D'
    },
    {
        imagen: 'img/top.jpg',
        titulo: 'Top Gun',
        clase: 'acción',
        formato: '2D'
    }
]

var contenedorCartelera = document.querySelector('.cartelera')

cartelera.forEach(function (cartel) {
    contenedorCartelera.innerHTML = contenedorCartelera.innerHTML + `<div class="cartel">
                                                                        <img src="${cartel.imagen}" alt="${cartel.titulo}"/>
                                                                        <h3>${cartel.titulo}</h3>
                                                                        <h4>${cartel.clase}</h4>
                                                                        <h4>${cartel.formato}</h4>
                                                                    </div>`
})