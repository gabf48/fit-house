import { Component, OnInit } from '@angular/core';
import { Abonamente } from './abonamente';
import { ABONAMENTE } from './detalii-abonamente';

@Component({
  selector: 'app-tarife',
  templateUrl: './tarife.component.html',
  styleUrls: ['./tarife.component.css']
})
export class TarifeComponent implements OnInit {

  heroes = ABONAMENTE;
  selectedHero?: Abonamente;

  constructor() { }

  ngOnInit() {
   
  }

  onSelect(hero: Abonamente): void {
    this.selectedHero = hero;
  }

}