import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalities',
  templateUrl: './personalities.component.html',
  styleUrls: ['./personalities.component.css']
})
export class PersonalitiesComponent implements OnInit {

  personalidades = [
    {
      name: 'Jean-Jacques Rousseau',
      image: '/assets/images/rousse.jpg',
      country: 'Francia',
      birth: 'Junio 28 de 1712',
      death: 'Julio 2 de 1778',
      description: 'Fue a la vez escritor, pedagogo, filósofo, músico, botánico y naturalista, y aunque fue definido como un ilustrado, presentó profundas contradicciones que lo separaron de los principales representantes de la Ilustración'
    },
    {
      name: 'Alejandro Magno',
      image: '/assets/images/alejandro.jpg',
      country: 'Macedonia',
      birth: '356 a. C.',
      death: '323 a. C.',
      description: 'Fue rey de Macedonia (desde 336 a. C.), Hegemón de Grecia, Faraón de Egipto (332 a. C), Gran rey de Media y Persia (331 a. C), hasta la fecha de su muerte.'
    },
    {
      name: 'John F. Kennedy',
      image: '/assets/images/john.jpg',
      country: 'Estados Unidos',
      birth: 'Mayo 29 de 1917',
      death: 'Noviemre 22 de 1963',
      description: 'Kennedy se convirtió en el presidente más joven de su país, después de Theodore Roosevelt. Ejerció desde el 20 de enero de 1961 hasta su asesinato en 1963. Durante su gobierno tuvo lugar la invasión de Bahía de Cochinos, la crisis de los misiles de Cuba, la construcción del Muro de Berlín.'
    },
    {
      name: 'Napoleón Bonaparte',
      image: '/assets/images/napoleon.jpg',
      country: 'Francia',
      birth: 'Agosto 15 de 1769',
      death: 'Mayo 5 de 1821',
      description: 'Fue un militar y estadista francés, general republicano durante la Revolución y el Directorio, desde el 2 de agosto de 1802 hasta su proclamación como emperador de los franceses (Empereur des Français)'
    },
    {
      name: 'Margaret Thatcher',
      image: '/assets/images/thatcher.jpg',
      country: 'Reino Unido',
      birth: 'Octubre 13 de 1925',
      death: 'Abril 8 de 2013',
      description: 'Margaret Hilda Thatcher fue una política británica que ejerció como primera ministra del Reino Unido desde 1979 a 1990, siendo la persona en ese cargo por mayor tiempo durante el siglo XX. Su firmeza para dirigir los asuntos de Estado, le valieron el sobrenombre de la Dama de Hierro.'
    },
    {
      name: 'Charles de Gaulle',
      image: '/assets/images/charles.jpg',
      country: 'Francia',
      birth: 'Noviembre 22 de 1890',
      death: 'Noviembre 9 de 1970',
      description: 'Fue un general francés que dirigió la resistencia francesa contra la Alemania nazi en la Segunda Guerra Mundial y presidió el Gobierno Provisional de la República Francesa de 1944 a 1946.'
    },
    {
      name: 'Frida Kahlo',
      image: '/assets/images/frida.jpg',
      country: 'Mexico',
      birth: 'Julio 6 de 1907',
      death: 'Julio 13 de 1954',
      description: 'Fue una pintora mexicana.2​ Su vida estuvo marcada por el infortunio de contraer poliomielitis y después por un grave accidente en su juventud que la mantuvo postrada en cama durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas.'
    },
    {
      name: 'Marie Curie',
      image: '/assets/images/marie.jpg',
      country: 'Polonia',
      birth: 'Noviembre 7 de 1867',
      death: 'Julio 4 de 1934',
      description: 'Maria Salomea Skłodowska-Curie fue una científica polaca nacionalizada francesa. Pionera en el campo de la radiactividad, fue la primera persona en recibir dos premios Nobel en distintas especialidades (Física y Química)'
    },
    {
      name: 'Hipócrates',
      image: '/assets/images/hipocrates.jpg',
      country: 'Grecia',
      birth: '460 a. C.',
      death: '370 a. C.',
      description: 'Fue un médico de la Antigua Grecia que ejerció durante el llamado siglo de Pericles. Está clasificado como una de las figuras más destacadas de la historia de la medicina, y muchos autores se refieren a él como el «padre de la medicina».'
    },
    {
      name: 'Isabel I de Inglaterra',
      image: '/assets/images/isabel.jpg',
      country: 'Inglaterra',
      birth: 'Septiembre 7 de 1533',
      death: 'Marzo 24 de 1603',
      description: 'Fue reina de Inglaterra e Irlanda desde el 17 de noviembre de 1558 hasta el día de su muerte. Isabel fue la quinta y última monarca de la dinastía Tudor.'
    },
    {
      name: 'Juana de Arco',
      image: '/assets/images/juana.jpg',
      country: 'Francia',
      birth: '1412',
      death: 'Mayo 30 de 1431',
      description: 'Fue una joven campesina francesa que guio al Ejército francés en la guerra de los Cien Años contra Inglaterra, logrando que Carlos VII de Valois fuese coronado rey de Francia.'
    },
    {
      name: 'Iósif Stalin',
      image: '/assets/images/stalin.jpg',
      country: 'Rusia',
      birth: 'Diciembre 18 de 1878',
      death: 'Marzo 5 de 1953',
      description: 'Fue un político y dictador soviético, secretario general del Comité Central del Partido Comunista de la Unión Soviética entre 1922 y 1952 y presidente del Consejo de Ministros de la Unión Soviética entre 1941 y 1953.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
