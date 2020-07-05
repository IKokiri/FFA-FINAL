import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }
  
  @Input() cidade;
  @Input() imagem;
  @Input() ocupado;


  somGo(){
    let audio = new Audio();
    audio.src = "../../../assets/sons/animais/dogo.mp3";
    audio.load();
    audio.play();
  }

  enviar(){
    this.somGo();
  }

  ngOnInit(): void {
  }

}
