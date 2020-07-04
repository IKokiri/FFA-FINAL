import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  
  animais = [
    {
      tipo:"Cachorro",
      path:"../../../assets/img/animais/dog.png"
    },
    {
      tipo:"Gato",
      path:"../../../assets/img/animais/cat.png"
    },
    {
      tipo:"Papagaio",
      path:"../../../assets/img/animais/parrot.png"
    },
  ]

  ngOnInit(): void {
  }

}
