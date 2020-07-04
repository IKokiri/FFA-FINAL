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

  ngOnInit(): void {
  }

}
