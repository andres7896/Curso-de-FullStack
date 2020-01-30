// Formas de instanciar un String

/*var str1 = 'Mi texto';
var str2 = "Mi texto";
var str3 =  `Mi texto`;
var str4 = new String('Mi texto');

//Nos permite interpolar variables

var str3 = `Mi texto`;

str3 = `Algo nuevo más ${str2}`;
var str5 = 'Algo nuevo más' + str2;

var script = "alert('saludar')";
var miClase = "buttom"

var button = "<buttom class=\"" + miClase + "\" onclick=\"" + script + "\">" + acción + "</buttom>"

var nuevobutton = `<buttom class="${miClase}" onclick="${script}">${acción}</buttom>`*/

//---------------------------------------------------------------

var str = 'prueba'
var strArray = str.split('')
var cuenta = str.length;
var viejaPosicion = 3;
var nuevaPosicion = 5;
var nuevaPalabra = '';

for (var i = 0; i < cuenta; i++) {
    if (i === viejaPosicion) {
        nuevaPalabra += str.charAt(nuevaPosicion);
        console.log(nuevaPalabra)
        //nuevaPalabra = nuevaPalabra + str.charAt(nuevaPosicion)
    }else if (i === nuevaPosicion) {
        nuevaPalabra += str.charAt(viejaPosicion)
    }else{
        nuevaPalabra = str.charAt(i)
    }
}

console.log(`Resultado ${nuevaPalabra}`);

//-------------------------------------------------------------------

/*var nombre = 'jeisson'

nombre.charAt(0).toUpperCase() + nombre.substr(1).toLowerCase()*/

//-----------------------------
// Funciones
//-----------------------------

function cambiarLetrasDePosicion(palabra, viejaPosicion, nuevaPosicion) {
    var nuevaPalabra = ''
    var cuenta = palabra.length
    for (var i = 0; i < cuenta; i++) {
        if (i === viejaPosicion) {
            nuevaPalabra += str.charAt(nuevaPosicion);
            //nuevaPalabra = nuevaPalabra + str.charAt(nuevaPosicion)
        }else if (i === nuevaPosicion) {
            nuevaPalabra += str.charAt(viejaPosicion)
        }else{
            nuevaPalabra = str.charAt(i)
        }
    }
}


