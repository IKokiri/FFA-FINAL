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
      animaisPermitidos:["dog","cat","parrot"]
    },  

    {
      id:2,
      cidade:"Bicas",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["cat","parrot"]
    },  

    {
      id:3,
      cidade:"Claraval",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","parrot"]
    },  

    {
      id:4,
      cidade:"Descoberto",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
      animaisPermitidos:["parrot"]
    },  

    {
      id:5,
      cidade:"Dom Joaquim",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
      animaisPermitidos:["dog","cat"]
    },  

    {
      id:6,
      cidade:"Eloi Mendes",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","cat","parrot"]
    },  

    {
      id:7,
      cidade:"Fama",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["cat"]
    },  

    {
      id:8,
      cidade:"Felixlandia",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","cat","parrot"]
    },  
  ]
  
  ngOnInit(): void {
    
    this.filtro = this.locais;
  }

  onChange(event) {
    
    let term = event.term.toLowerCase()

    this.filtro = this.locais.filter(local => {
      
      if(term == "" && event.animal == ""){
        return local.cidade;
      }else{

        if (local.animaisPermitidos.includes(event.animal) && term == "")
          return local.cidade;
        
        if(local.cidade.toLowerCase().indexOf(term) > -1 && event.animal == "")
          return local.cidade

        if (local.animaisPermitidos.includes(event.animal) && local.cidade.toLowerCase().indexOf(term) > -1)
          return local.cidade;
      }
    });
  }

}
