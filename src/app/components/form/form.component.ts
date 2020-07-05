import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  
  term: string;
  
  animais = [
    {
      tipo:"Cachorro",
      path:"../../../assets/img/animais/dog.png",
      sound:"../../../assets/sons/animais/dog.mp3"
    },
    {
      tipo:"Gato",
      path:"../../../assets/img/animais/cat.png",
      sound:"../../../assets/sons/animais/cat.mp3"
    },
    {
      tipo:"Papagaio",
      path:"../../../assets/img/animais/parrot.png",
      sound:"../../../assets/sons/animais/parrot.mp3"
    },
  ]

  ngOnInit(): void {
   
  }

  
  @Output() respostaTerm = new EventEmitter();

  feedback(event) {
    this.respostaTerm.emit(event);
  }

}
