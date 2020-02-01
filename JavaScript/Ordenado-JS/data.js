const contenedor = document.querySelector('#container')
const select = document.querySelector('#ordenar')
const opcion = document.querySelector('#primero')
console.log(contenedor, select)

var productos = [
    {
        imagen: 'img/celular.jpg',
        titulo: 'Xiaomi Mi',
        clase: 'celulares',
        precio: '$ 1500000'
    },
    {
        imagen: 'img/saco.jpg',
        titulo: 'GAP',
        clase: 'ropa',
        precio: '$ 80000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Iphone X',
        clase: 'celulares',
        precio: '$ 3450000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Huawei P30',
        clase: 'celulares',
        precio: '$ 2000000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Calvin Klein',
        clase: 'ropa',
        precio: '$ 90000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'KOAJ',
        clase: 'ropa',
        precio: '$ 90000'
    },
    {
        imagen: 'img/celular.jpg',
        titulo: 'Moto G4',
        clase: 'celulares',
        precio: '$ 650000'
    },
    {
        imagen: 'img/pantalon.jpg',
        titulo: 'Levis',
        clase: 'ropa',
        precio: '$ 80000'
    },
    {
        imagen: 'img/pc.jpg',
        titulo: 'MAC',
        clase: 'computadora',
        precio: '$ 1480000'
    },
    {
        imagen: 'img/pc.jpg',
        titulo: 'ASUS',
        clase: 'computadora',
        precio: '$ 2080000'
    }
]

function dibujarProducto(parametro) {
    return `<div class="${parametro.clase}">
                <img src="${parametro.imagen}" alt="${parametro.titulo}" id="${parametro.clase}">
                <h5>${parametro.titulo}</h5>
                <span>${parametro.precio}</span>
                </div>`
}


function refrescarLista() {
    let contenido = ''
    productos.forEach(function(producto) {
      contenido += dibujarProducto(producto)
    })
    contenedor.innerHTML = contenido
}

// Filtrar Producto

addEventListener('change', function () {
    
    const seleccion = document.querySelector('#seleccion')
    const valorSelecct = seleccion.value
    var celular = document.querySelectorAll('.celulares');
    var saco = document.querySelectorAll('.ropa');
    var pc = document.querySelectorAll('.computadora');

    switch (valorSelecct.toLowerCase()) {
        case 'celulares':
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
            break;
    }
    refrescarLista()
})

// Ordenado de productos

select.addEventListener('change', function () {
    const valorSeleccionado = select.value
    console.log(valorSeleccionado)
    
    // Primer caso cuando la persona selecciona Celulares
    switch (valorSeleccionado) {
        case 'celular':
            const celulares = document.querySelectorAll('.celulares')
            celulares.forEach(function (celular) {
                contenedor.insertBefore(celular, contenedor.firstChild)
            });
            break;
        case 'computador':
            const computadoras = document.querySelectorAll('.computadora')
            computadoras.forEach(function (computador) {
                contenedor.insertBefore(computador, contenedor.firstChild)
            });
            break;
        case 'ropa':
            const prendas = document.querySelectorAll('.ropa')
            prendas.forEach(function (prenda) {
                contenedor.insertBefore(prenda, contenedor.firstChild)
            });
            break;
        default:
            break;
    }
    refrescarLista()
})

// Mostrar de Mayor a Menor


addEventListener('change', function (event) {
    const valorSeleccionado = opcion.value
    let comparador

    switch (valorSeleccionado) {
        case 'MenorAMayor':
            comparador = function (obj1, obj2) {
                if (obj1.precio > obj2.precio) {
                    return -1
                }else{
                    return 1
                }
            }
            break;
        case 'MayorAMenor':    
            comparador = function (obj1, obj2) {
                if (obj1.precio > obj2.precio) {
                    return 1
                }else{
                    return -1
                }
            }
            break;
        case 'Az':    
            comparador = function (obj1, obj2) {
                if (obj1.titulo > obj2.titulo) {
                    return 1
                }else{
                    return -1
                }
            }
            break;
        case 'Za':    
            comparador = function (obj1, obj2) {
                if (obj1.titulo > obj2.titulo) {
                    return -1
                }else{
                    return 1
                }
            }
            break;
        default:
            comparador = function (obj1, obj2) {
                return 0
            }
            break;
    }
    productos = productos.sort(comparador)
    console.log(productos)
    refrescarLista()
})

refrescarLista()