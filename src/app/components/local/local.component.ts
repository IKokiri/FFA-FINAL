import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }
  
  @Input() id;
  @Input() cidade;
  @Input() imagem;
  @Input() ocupado;
  @Input() animaisPermitidos = [];

  @Output() respostaOcupado = new EventEmitter();

  somGo(){
    let audio = new Audio();
    audio.src = "../../../assets/sons/animais/dogo.mp3";
    audio.load();
    audio.play();
  }

  enviar(id){

    if(this.ocupado == "true"){
      alert("Local ocupado!")
    }else{
      alert("reserva com sucesso, leve seu animal.")
      this.feedback(id)
      this.somGo(); 
    }
    
  }
  
  feedback(event) {
    
    this.respostaOcupado.emit(event);
  }

  ngOnInit(): void {
    
  }

}
