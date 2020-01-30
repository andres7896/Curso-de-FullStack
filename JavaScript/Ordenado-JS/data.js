/*function filtrado() {
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
})*/

//----Va a pintar lista de elementos

//Celulares

var productos = [
    {
        imagen: 'img/celular.jpg',
        titulo: 'Xiaomi Mi',
        clase: 'celulares',
        precio: '$ 1.500.000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Levis',
        clase: 'ropa',
        precio: '$ 80.000'
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
        imagen: 'img/pantalon.jpg',
        titulo: 'Calvin Klein',
        clase: 'ropa',
        precio: '$ 90.000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Calvin Klein',
        clase: 'ropa',
        precio: '$ 90.000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Moto G4',
        clase: 'celulares',
        precio: '$ 650.000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Levis',
        clase: 'ropa',
        precio: '$ 80.000'
    }
]

const contenedor = document.querySelector('#container')

let contenido

function refrescarLista() {
    
}

function dibujarProducto(elemento) {
    return `<div class="celular">
                <img src="${producto.imagen}" alt="${producto.titulo}" id="${producto.clase}">
                <h5>${producto.titulo}</h5>
                <span>${producto.precio}</span>
            </div> `
}

refrescarLista()

/*
celulares.forEach(function (celular) {
    contenido += `<div class="celular">
                    <img src="${celular.imagen}" alt="${celular.titulo}" id="${celular.clase}">
                    <h5>${celular.titulo}</h5>
                    <span>${celular.precio}</span>
                  </div> `
})
*/ 

/*
productos.sort(function(obj1, obj2){
if(obj1.precio < obj2.precio){
     return 1   
 }else{
    return -1
}
*/