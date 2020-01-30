/*for (let i = 1; i <= 10; i++) {
    //Instrucciones
    console.log('Primero: ', i)
}

let i = 0
for (; i < 10; i++) {
    console.log(i)
}*/

/*var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i])
}*/

/*var listaDeAmigos = ['Juan', 'Martha', 'Miguel', 'Sara', 'Jueves', 'John', 'Viviana', 'Amparo', 'Amparo', 'Paola', 'Kevin']

for (let i = 0; i < listaDeAmigos.length; i++) {
    console.log(listaDeAmigos[i])
}*/

/*var listaDeAmigos = ['Juan', 'Martha', 'Miguel', 'Sara', 'Jueves', 'John', 'Viviana', 'Amparo', 'Amparo', 'Paola', 'Kevin']

listaDeAmigos.forEach(function (nombreAmigo) {
    console.log(nombreAmigo)
});*/

/*var listaDeAmigos = ['Juan', 'Martha', 'Miguel', 'Sara', 'Jueves', 'John', 'Viviana', 'Amparo', 'Amparo', 'Paola', 'Kevin']

for (let nombreAmigo of listaDeAmigos) {
    console.log(nombreAmigo)
}*/

/*var listaDeAmigos = ['Juan', 'Martha', 'Miguel', 'Sara', 'Jueves', 'John', 'Viviana', 'Amparo', 
'Amparo', 'Paola', 'Kevin']

for (let i in listaDeAmigos) {
    console.log(listaDeAmigos[i])
}*/


/*---- Formas de usar  ------*/

/*function imprimirMensaje(esUnSaludo) {
    if (esUnSaludo) {
        let mensaje = 'Hola'
    }else {
        let mensaje = 'Adios'
    }
    console.log(mensaje);
}

imprimirMensaje(true)*/

/*var i = 0
for (; i < 3; i++) {
    console.log(i)
}

console.log('Contador ', i)*/


/*-----WHILE-------*/

/*while (condicion) {
    //Instrucción
}*/

/*var contador = 0

while (contador < 10) {
    console.log(contador)
    contador ++
}*/

/*let peso = 120 // kg
let meta = 70 // Kg
let contadorDias = 0;

while (peso > meta) {
    hacerEjercicio()
    contadorDias ++
}

function hacerEjercicio() {
    peso = peso - Math.ceil(Math.random() * 2)
}

console.log(`Cantidad de días de ejercicio: ${contadorDias}`)*/


// Taller

/*
Calcular la fecha de septimo Domingo del año 2020
*/

let numeroDomingos = 0;
let fecha = new Date(2019, 12, 0) //iciembre 31 del 2019

while (numeroDomingos < 7) {
    fecha.setDate(fecha.getDate() + 1)

    if (fecha.getDay() === 0) {
        numeroDomingos = numeroDomingos +1;
    }
}

console.log(fecha)

