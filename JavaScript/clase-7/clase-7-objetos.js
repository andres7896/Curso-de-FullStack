/*var objeto = {
    clave: 'El valor',
    id: 1,
    saludar: function () {
        
    }
}*/

/*var nombreAndres = 'Andres';

var persona = {
    nombre: 'Andres',
    apellido: 'Garcia',
    edad: 28,
    //email: null
}


persona.email = 'andres134@gmail.com';
*/

//console.log(this)

function crearPersona(nombre, apellido, edad) {
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        toString: function () {
            return `${this.nombre} ${this.apellido}`
        },
        whoIsThis: function () {
            console.log(this)
        }
    }
    return persona
}


function cambiarNombre(persona, nuevoNombre) {
    persona.nombre = nuevoNombre;
    return{
        ...persona,
        nombre: nuevoNombre
    }
}
