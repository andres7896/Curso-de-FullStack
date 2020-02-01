var personaje;

// Request en paralelo
/*jQuery.ajax('https://rickandmortyapi.com/api/',{
    success: function(response){
        console.log('Request 1')
        window.response = response
    }
})
jQuery.ajax('https://rickandmortyapi.com/api/',{
    success: function(response){
        console.log('Request 2')
    }
})

console.log('Mensaje 1', personajes)
*/

//Sincronizados
const contenedor = document.querySelector('.contenedor')

jQuery.ajax('https://rickandmortyapi.com/api/',{
    method: 'GET',
    success: function(response){
    //Obteniendo Personajes
    jQuery.ajax(response.characters, {
        method: 'GET',
        success: function(response){
                console.log('Lista de personajes', response)
                response.results.forEach(function(personaje) {
                    contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
                                                                        <img src="${personaje.image}" alt=""/>
                                                                        <h3>${personaje.name}</h3>
                                                                    </div>`
                });
        },
        error: function(error) {
            console.log('Error trayendo personajes ', error)
        }
        })
    }
})