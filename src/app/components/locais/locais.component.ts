import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {

  constructor() { }

  locais = [
    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  
  ]
  ngOnInit(): void {
  }

}
