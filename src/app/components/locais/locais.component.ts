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
      id:1,
      cidade:"Bicas",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["cat","parrot"]
    },  

    {
<<<<<<< HEAD
      id:1,
=======
      id:1  ,
>>>>>>> 219540c4cfd2f958b4110eb164a367c34ef428b1
      cidade:"Claraval",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","parrot"]
    },  

    {
      id:1,
      cidade:"Descoberto",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
      animaisPermitidos:["parrot"]
    },  

    {
      id:1,
      cidade:"Dom Joaquim",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:true,
      animaisPermitidos:["dog","cat"]
    },  

    {
      id:1,
<<<<<<< HEAD
      cidade:"Eloi Mendes",
=======
      cidade:"Mucuri",
>>>>>>> 219540c4cfd2f958b4110eb164a367c34ef428b1
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","cat","parrot"]
    },  

    {
      id:1,
      cidade:"Fama",
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["cat"]
    },  

    {
      id:1,
<<<<<<< HEAD
      cidade:"Felixlandia",
=======
      cidade:"Felixlândia",
>>>>>>> 219540c4cfd2f958b4110eb164a367c34ef428b1
      imagem:"../../../assets/img/locais/local.jpg",
      ocupado:false,
      animaisPermitidos:["dog","cat","parrot"]
    },  
  ]
  
  ngOnInit(): void {
    
    this.filtro = this.locais;
    
  }

  ocupar(id){

    this.filtro = this.locais.filter(local => {
      if(local.id == id)
        local.ocupado = true;
      return local
    });
  }
  teste(event){ 
    
    this.ocupar(event)
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
