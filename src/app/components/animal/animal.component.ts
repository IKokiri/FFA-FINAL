import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  @Input() tipo;
  @Input() path;
  @Input() sound;

  ngOnInit(): void {
  }


  som(){
    let audio = new Audio();
    audio.src = this.sound;
    audio.load();
    audio.play();
  }

}
