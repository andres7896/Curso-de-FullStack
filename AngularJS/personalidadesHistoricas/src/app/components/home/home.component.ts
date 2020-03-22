import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top = [
    {
      name: 'Jean-Jacques Rousseau',
      image: '/assets/images/rousse.jpg',
      country: 'Francia',
      birth: 'Junio 28 de 1712',
      death: 'Julio 2 de 1778',
      description: 'Fue a la vez escritor, pedagogo, filósofo, músico, botánico y naturalista, y aunque fue definido como un ilustrado, presentó profundas contradicciones que lo separaron de los principales representantes de la Ilustración'
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
      name: 'Marie Curie',
      image: '/assets/images/marie.jpg',
      country: 'Polonia',
      birth: 'Noviembre 7 de 1867',
      death: 'Julio 4 de 1934',
      description: 'Maria Salomea Skłodowska-Curie fue una científica polaca nacionalizada francesa. Pionera en el campo de la radiactividad, fue la primera persona en recibir dos premios Nobel en distintas especialidades (Física y Química)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
