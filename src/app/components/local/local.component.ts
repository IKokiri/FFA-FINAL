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
  @Input() animaisPermitidos = [];


  somGo(){
    let audio = new Audio();
    audio.src = "../../../assets/sons/animais/dogo.mp3";
    audio.load();
    audio.play();
  }

  enviar(){

    if(this.ocupado == "true"){
      alert("Local Reservado!")
    }else{
      this.somGo(); 
    }
    
  }

  ngOnInit(): void {
    
  }

}
