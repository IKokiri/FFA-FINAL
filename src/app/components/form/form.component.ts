import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {DistritoService} from '../../services/distrito.service'
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {  

  model: NgbDateStruct;

  constructor(private distrito: DistritoService) {}
  
  term : string = "";
  animal : string = "";
  distritos;

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
    
    this.distrito.getDistritos().subscribe(data => {
      this.distritos = data;
    });
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
