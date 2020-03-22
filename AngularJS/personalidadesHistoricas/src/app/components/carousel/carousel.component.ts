import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    {
      image: '/assets/images/carrucel/frida.jpg',
      title: 'Fida kahlo'
    },
    {
      image: '/assets/images/carrucel/thatcher.jpg',
      title: 'Margaret Thatcher'
    },
    {
      image: '/assets/images/carrucel/john.jpg',
      title: 'John F. Kennedy'
    },
    {
      image: '/assets/images/carrucel/hipocrates.jpg',
      title: 'Hipocrates'
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
