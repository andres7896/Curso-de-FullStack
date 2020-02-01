function filtrado() {
    let producto = document.querySelector('#seleccion').value;
    var celular = document.querySelectorAll('#celular');
    var saco = document.querySelectorAll('#saco');
    var pc = document.querySelectorAll('#computadora');
    var pantalon = document.querySelectorAll('#pantalon');

    switch (producto.toLowerCase()) {
        case 'celular':
            for (let i = 0; i < celular.length; i++) {
                let element = celular[i]
                element.style.display = 'inline';
            }
            for (let i = 0; i < saco.length; i++) {
                let element = saco[i] 
                element.style.display = 'none';
            }
            for (let i = 0; i < pc.length; i++) {
                let element =  pc[i]
                element.style.display = 'none';
            }
            for (let i = 0; i < pantalon.length; i++) {
                let element = pantalon[i] 
                element.style.display = 'none';
            }

            break;
        case 'ropa':
            for (let i = 0; i < celular.length; i++) {
                let element = celular[i]
                element.style.display = 'none';
            }
            for (let i = 0; i < saco.length; i++) {
                let element = saco[i] 
                element.style.display = 'inline';
            }
            for (let i = 0; i < pc.length; i++) {
                let element =  pc[i]
                element.style.display = 'none';
            }
            for (let i = 0; i < pantalon.length; i++) {
                let element = pantalon[i] 
                element.style.display = 'inline';
            }

            break;
        case 'computador':
            for (let i = 0; i < celular.length; i++) {
                let element = celular[i]
                element.style.display = 'none';
            }
            for (let i = 0; i < saco.length; i++) {
                let element = saco[i] 
                element.style.display = 'none';
            }
            for (let i = 0; i < pc.length; i++) {
                let element =  pc[i]
                element.style.display = 'inline';
            }
            for (let i = 0; i < pantalon.length; i++) {
                let element = pantalon[i] 
                element.style.display = 'none';
            }
            break;
        default:
            alert('Por favor eliga una opción')
            break;
    } 
}

const contenedor = document.querySelector('#container')
const selector = document.querySelector('#ordenar')

selector.addEventListener('change', function () {
    const valorSeleccionado = selector.value
    console.log(valorSeleccionado)
    
    // Primer caso cuando la persona selecciona Celulares
    switch (valorSeleccionado) {
        case 'celular':
            const celulares = document.querySelectorAll('#celular')
            celulares.forEach(function (celular) {
                contenedor.insertBefore(celular, contenedor.firstChild)
            });
            break;
        case 'computador':
            const computadoras = document.querySelectorAll('#computadora')
            computadoras.forEach(function (computador) {
                contenedor.insertBefore(computador, contenedor.firstChild)
            });
            break;
        case 'ropa':
            const prendas = document.querySelectorAll('#ropa')
            prendas.forEach(function (prenda) {
                contenedor.insertBefore(prenda, contenedor.firstChild)
            });
            break;
        default:
            break;
    }
})

//----Va a pintar lista de elementos

//Celulares

/*var celulares = [
    {
        imagen: 'img/celular.jpg',
        titulo: 'Xiaomi Mi',
        clase: 'celulares',
        precio: '$ 1.500.000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Iphone X',
        clase: 'celulares',
        precio: '$ 3.450.000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Huawei P30',
        clase: 'celulares',
        precio: '$ 2.000.000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Moto G4',
        clase: 'celulares',
        precio: '$ 650.000'
    }
]

const contenedor = document.querySelector('#container')

let contenido

celulares.forEach(function (celular) {
    contenido += `<div class="celular">
                    <img src="${celular.imagen}" alt="${celular.titulo}" id="${celular.clase}">
                    <h5>${celular.titulo}</h5>
                    <span>${celular.precio}</span>
                  </div> `
})

contenedor.innerHTML = contenido

// Ropa

var ropa = [
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Levis',
        clase: 'pantalon',
        precio: '$ 80.000'
    },
    {
        imagen: 'img/saco.jpg',
        titulo: 'GAP',
        clase: 'saco',
        precio: '$ 150.000'
    },
    {
        imagen: 'img/saco.jpg',
        titulo: 'SUPREME',
        clase: 'saco',
        precio: '$ 250.000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Calvin Klein',
        clase: 'pantalon',
        precio: '$ 90.000'
    }
]

const contenedor = document.querySelector('#container')

let contenido

ropa.forEach(function (prendas) {
    contenido += `<div class="prendas">
                    <img src="${prendas.imagen}" alt="${prendas.titulo}" id="${prendas.clase}">
                    <h5>${prendas.titulo}</h5>
                    <span>${prendas.precio}</span>
                  </div> `
})

contenedor.innerHTML = contenido*/

/* 
var lista = [
    {nombre: 'Uvas', precio: 1300}, 
    {nombre: 'Fresas', precio: 900},   
    {nombre: 'Mangos', precio: 1780}
]

function comparador(obj1, obj2){
    if(obj1.precio > obj2.precio){
        return 1
    }else{
        return -1
    }
}

lista.sort(comparador)
(3) [{…}, {…}, {…}]
0: {nombre: "Fresas", precio: 900}
1: {nombre: "Uvas", precio: 1300}
2: {nombre: "Mangos", precio: 1780}

function comparador(obj1, obj2){
    if(obj1.precio > obj2.precio){
        return -1
    }else{
        return 1
    }
}

lista.sort(comparador)
(3) [{…}, {…}, {…}]
0: {nombre: "Mangos", precio: 1780}
1: {nombre: "Uvas", precio: 1300}
2: {nombre: "Fresas", precio: 900}
length: 3
__proto__: Array(0)
*/