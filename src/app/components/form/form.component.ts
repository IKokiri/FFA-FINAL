import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  
  term : string = "";
  animal : string = "";

  animais = [
    {
      tipo:"dog",
      path:"../../../assets/img/animais/dog.png",
      sound:"../../../assets/sons/animais/dog.mp3"
    },
    {
      tipo:"cat",
      path:"../../../assets/img/animais/cat.png",
      sound:"../../../assets/sons/animais/cat.mp3"
    },
    {
      tipo:"parrot",
      path:"../../../assets/img/animais/parrot.png",
      sound:"../../../assets/sons/animais/parrot.mp3"
    },
  ]

  ngOnInit(): void {
   
  }

  
  @Output() respostaTerm = new EventEmitter();

  feedback(event) {
    this.respostaTerm.emit({term:event,animal:this.animal});
  }

  setAnimal(animal){
    this.animal = animal
    this.feedback(this.term)
  }

}
