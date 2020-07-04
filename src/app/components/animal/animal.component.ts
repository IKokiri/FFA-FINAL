import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  @Input() tipo;
  @Input() path;

  ngOnInit(): void {
  }

}
