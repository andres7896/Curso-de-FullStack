import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs = [
    {
      image: '/assets/images/dnce.jpg',
      songUrl: '/assets/music/afterlife',
      title: 'After Life',
      author: 'Anonymus'
    },
    {
      image: '/assets/images/jBalvin.jpg',
      songUrl: '/assets/music/Alesso vs OneRepublic - If I Lose Myself (Alesso Remix)',
      title: 'If I Lose Myself (Alesso Remix)',
      author: 'Alesso vs OneRepublic',
    },
    {
      image: '/assets/images/jetpacks.jpg',
      songUrl: '/assets/music/Hysteria',
      title: 'Hysteria',
      author: 'Anonymus'
    },
    {
      image: '/assets/images/houseMafia.jpg',
      songUrl: '/assets/music/the-ellie-badge',
      title: 'the-ellie-badge',
      author: 'Ellie Badge'
    }
  ];

  changeSong(urlSong){
    const video: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    video.setAttribute('src', urlSong + '.mp3');
    video.play();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
