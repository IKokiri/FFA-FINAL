import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {

  constructor() { }
  
  filtro=[];

  locais = [
    {
      id:1,
      cidade:"Contagem",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
    },  

    {
      id:1,
      cidade:"Bicas",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Claraval",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Descoberto",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
    },  

    {
      id:1,
      cidade:"Dom Joaquim",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
    },  

    {
      id:1,
      cidade:"Eloi Mendes",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Fama",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  

    {
      id:1,
      cidade:"Felixlandia",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
    },  
  ]
  
  ngOnInit(): void {
    
    this.filtro = this.locais;
  }

  onChange(term) {
    this.filtro = this.locais.filter(local => {
      return local.cidade.toLowerCase().indexOf(term) > -1;
    });
  }

}
