//var date = new Date();
//var date = new Date(2020, 0, 26);
/*
var date = new Date(2020, 0, 26);
undefined
date
Sun Jan 26 2020 00:00:00 GMT-0500 (hora estándar de Colombia)
date.getDay()
0
var date = new Date();
undefined
var today = new Date();
undefined
today - date
12319
12319 / 1000 / 60 / 60 /24
0.00014258101851851853
*/

/*---- MATH ---*/

/*var hoy = new Date()
var segundaFecha = new Date('1995-09-12')

function calcularDiferenciaEnAnos (fecha1, fecha2) {
    var diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365)
}

var anos = calcularDiferenciaEnAnos(segundaFecha, hoy)
console.log(`La diferencia en días es ${anos}`)

var anos2 = calcularDiferenciaEnAnos(hoy, segundaFecha)
console.log(`La diferencia en días es ${anos2}`)*/


/*var opc = prompt()
var hoy = new Date()
var segundaFecha = new Date('1990-09-12')

switch (opc.toLowerCase()) {
    case 'años':
        function calcularDiferenciaEnAnos (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365)
        }
        var anos = calcularDiferenciaEnAnos(segundaFecha, hoy)
        console.log(`La diferencia en años es ${anos}`)
        break;
    case 'meses':
        function calcularDiferenciaEnMeses (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return Math.floor(diferencia / 1000 / 60 / 60 / 24 / 30)
        }
        var meses = calcularDiferenciaEnMeses(segundaFecha, hoy)
        console.log(`La diferencia en meses es ${meses}`)
        break;
    case 'dias':
        function calcularDiferenciaEnDias (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return Math.floor(diferencia / 1000 / 60 / 60 / 24)
        }
        var dias = calcularDiferenciaEnDias(segundaFecha, hoy)
        console.log(`La diferencia en días es ${dias}`)
        break;
    case 'horas': 
        function calcularDiferenciaEnHoras (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return Math.floor(diferencia / 1000 / 60 / 60)
        }
        var horas = calcularDiferenciaEnHoras(segundaFecha, hoy)
        console.log(`La diferencia en días es ${horas}`)
    case 'minutos':
        function calcularDiferenciaEnMinutos (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return diferencia / 1000 / 60
        }
        var minutos = calcularDiferenciaEnMinutos(segundaFecha, hoy)
        console.log(`La diferencia en días es ${minutos}`)
    case 'segundos':
        function calcularDiferenciaEnSegundos (fecha1, fecha2) {
            var diferencia = Math.abs(fecha1 - fecha2)
            return diferencia / 1000
        }
        var mili = calcularDiferenciaEnSegundos(segundaFecha, hoy)
        console.log(`La diferencia en días es ${mili}`)
        break;
    default:
        console.log('Opción no valida')
        break;
}*/
