const cabecera = document.querySelector('#cabecera');
const contain = document.querySelector('#contain');
const footer = document.querySelector('#footer');
const popular = document.querySelector('#popular');

cabecera.innerHTML = `<div class='logoLenguaje'>
                        <div class='logo'>
                            <img src="img/logo.png" alt="Onefootball">
                        </div>
                        <div class="lenguaje">
                            <select name="pais" class='pais' id="pais">
                                <option value="ingles"><strong>English</strong></option>
                                <option value="argentina">Argentina</option>
                                <option value="brasil">Brasil</option>
                                <option value="chile">Chile</option>
                                <option value="colombia">Colombia</option>
                                <option value="alemania">Alemania</option>
                                <option value="españa">España</option>
                                <option value="francia">Francia</option>
                                <option value="italia">Italia</option>
                                <option value="mexico">México</option>
                                <option value="holanda">Holanda</option>
                            </select>
                        </div>
                    </div>
                        <div class="buscar">
                            <div class="btnBuscar">
                                <input type="text" name="buscar" id="buscar" placeholder="Buscar por equipos y campeonatos">
                            </div>
                            <div class="iconoBuscar">
                                <img src="img/buscar.png" alt="ImgBuscar" class="iconBuscar">
                            </div>
                        </div>`

// Noticias



function mostrarNoticias(){
    var URL = 'http://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=ea06f41202504ddf83dccc72b6b31007';
    jQuery.ajax(URL, {
        sucess: function(response){
            console.log('Lista de Noticias', response);
        }
    })
}

mostrarNoticias();