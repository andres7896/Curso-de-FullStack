
var alumno = 'Juan';
var hora_de_llegada = 10;
var horaLimiteDeLlegada = 10;
var trajoExcusa = true;

// false OR true => Verdadero
/*if (hora_de_llegada > horaLimiteDeLlegada || TrajoExcusa) {
    console.log(`${alumno} llegó tarde`)
}else{
    console.log(`${alumno} llegó a tiempo`)
}*/

/*
* NOT => !
* !false => true
* !true => false
*/

// false AND true => Verdadero
/*if (hora_de_llegada > horaLimiteDeLlegada && !trajoExcusa) {
    if (trajoExcusa) {
        console.log(`${alumno} NO tiene falla!`)
    }else{
        console.log(`${alumno} tiene una falla!`)
    }
}else if (hora_de_llegada <= 8){
    console.log(`${alumno} casi se queda afuera!`)
}else{
    console.log(`${alumno} llegó a tiempo!`)
}*/

/*
Vamos a calcular el valor de un galon de gasolina, dadas las sigueintes condiciones:

1. El valor norma del galon de gasolina es de 1000 pesos

2. Los días Lunes el valor aumenta en un 10%

3. Los días  miercoles el valor se redece en 100 pesos

4. Los días viernes de 3 a 6 de la tarde el valor se reduce en 150 pesos

5. Los fines de semana el valor amenta en 20%

6. El resto de días vamos 

Crear una función para determinar el valor de la gasolina dados la cantidad de galones de gasolina, 
una hora de llegada en un día de la semana 
*/ 

/*function gasolina() {
    var normal = 10000;
    var dia = prompt();
    var hora = 3;
    if (dia === 'Lunes') {
        normal = normal + (normal * 0.1);
        console.log(`El valor de la gasolina el día lunes es de: ${normal}`)
    }else if (dia === 'Martes') {
        console.log(`El valor de la gasolina el día martes es de: ${normal}`)
    }else if (dia === 'Miercoles') {
        normal = normal - 1;
        console.log(`El valor de la gasolina el día miercoles es de: ${normal}`)
    }else if (dia === 'Jueves') {
        console.log(`El valor de la gasolina el día jueves es de: ${normal}`)
    }else if (dia === 'Viernes' && hora === 3 || hora === 6) {
        normal = normal - 150;;
        console.log(`El valor de la gasolina el día viernes es de: ${normal}`)
    }else if (dia === 'Sabado' || dia === 'Domingo') {
        normal = normal + normal * 0.2;
        console.log(`El valor de la gasolina los festivos es de: ${normal}`)
    }
}

gasolina()*/

function calcularValorGasolina(cantidadGalones, nombreDia, horaLlegada) {
    var valorGalon = 1000;

    switch (nombreDia) {
        case 'lunes':
            valorGalon = valorGalon + (valorGalon * 10 / 100);
            break;
        case 'miercoles':
            valorGalon = valorGalon - 10;
            break;
        case 'viernes':
            if (horaDeLlegada >= 15 && horaDeLlegada <= 18) {
                valorGalon = valorGalon - 150 // 850
            }
            break;
        case 'Sabado':
        case 'Domingo':
            valorGalon = valorGalon + (valorGalon * 20 / 100);
            break;
        default:
            if (cantidadGalones % 2 === 0) {
                valorGalon = valorGalon - 80
            }
            break;
    }
    return valorGalon * cantidadGalones;
}

//var valorGasolina = calcularValorGasolina(, 'Lunes', 15)
//console.log('El valor de la gasolina es de $ ' + valorGasolina )

var inputCantidadGalones = document.querySelector('#cantidadGalones');
var inputDiaSemana = document.querySelector('#diaSemana');
var inputHoraDeLlegada = document.querySelector('#horaDeLlegada');

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    if (esValido()) {
        var valorGasolina = calcularValorGasolina(parseFloat(inputCantidadGalones.value), 
            inputDiaSemana.value, 
            parseInt(inputHoraDeLlegada.value)
        ) 

        console.log('El valor de la gasolina es de $ ' + valorGasolina)

        var salida = document.querySelector('#salida')
        salida.innerHTML = `<h3>El valor de la gasolina es de $ ${valorGasolina}</h3>`

    }else{
        console.error('Error: ' , 'Por favor valide los parametros el formulario')
    }
    
})

function esValido() {
    var cantidadGalones = parseFloat(inputCantidadGalones.value);
    if (cantidadGalones < 0 ) {
        return false;
    }
    return true;
}

var borrarTodo = function () {
    var salida = document.querySelector('#salida');
    salida.innerHTML = '';
}

document.querySelector('#botonBorrar').addEventListener('click', function (event) {
    borrarTodo()
    alert('Todo ha sido borrado!')
})