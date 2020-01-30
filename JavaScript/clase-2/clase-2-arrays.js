//Arreglo

/*var arrayNumber = [0, 1, 5, 6]
var arrayString = ['a', 'c', 'y']
var arrayMixto = ['a', 9, {}, function () {}]

arrayNumber.length //Devuelve la cantidad de datos que posee el array

var arrayNumber = [0, 1, 5, 6]
arrayNumber.length // 4

arrayNumber.push(8)
arrayNumber.length //5

var frutas = ["Manzana", "Banana", "Uvas"];
frutas.length
frutas[frutas.length - 3]

frutas.splice(0, 1) //Elimina elemento del array
frutas.sort() //Ordena items 
frutas.findIndex(function(frutas){ return frutas === 'Uvas' }) //Devuelve posicioón del objeto
frutas.pop()
frutas.spit('') //Convierte una cadena en un Array
frutas.join('') //Convierte un array en una cadena



//1. Reto
//La última letra de cada palabra debe ir en mayusculas y el resto en minúsculas 
// Resultado
var salida = "laS frutaS soN muY ricaS"*/


// 2. Reto
// Que todas las palabras esten al reves

// 3. Contar las veces que se repite cada palabra
// que todas las palabras esten al reves

//1. Reto 

function cambiarUltimaLetra() {
    var entrada = 'las frutas son muy deliciosas '; 
    var salida = ' ';
    var long = entrada.length

    for (let i = 0; i < long; i++) {
        if (entrada.charAt(i) === ' ') {
            salida += entrada.charAt(i-1).toUpperCase()
        }else {
            salida += entrada.charAt(i-1)
        }
    }
    console.log(salida)
}
 cambiarUltimaLetra()

 //2. Reto

 function alReves() {
    var entrada = 'las frutas son muy ricas'; 
    var mensaje = entrada.split('').reverse().join('');
    console.log(mensaje);
 }

 alReves()

function contador() {
    var entrada = 'las frutas son muy ricas frutas muy interesantes pero muy muy ricas e interesantes'.split(' ').reverse();
    console.log(entrada.join(' '));
    var iterator = entrada.values();
    var contFrutas = 0;
    var contMuy = 0;
    var contLas = 0;
    var contSon = 0;
    var contRic = 0;
    var contInt = 0;
    
    for(let palabra of iterator){
        if (palabra === 'frutas') {
            contFrutas += 1;
        }else if (palabra === 'muy') {
            contMuy += 1;
        }else if (palabra === 'las') {
            contLas += 1;
        }else if (palabra === 'son') {
            contSon += 1;
        }else if (palabra === 'ricas') {
            contRic += 1;
        }else if (palabra === 'interesantes') {
            contInt += 1;
        }
    }
    
    console.log(`Frutas: ${contFrutas}`); 
    console.log(`Muy: ${contMuy}`);
    console.log(`Son: ${contSon}`);
    console.log(`Ricas: ${contRic}`);
    console.log(`Interesantes: ${contInt}`)
}

contador()




