import { ECHIPA } from './echipa-detalii';
import { Component, OnInit } from '@angular/core';
import { Echipa } from './echipa';


@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.css']
})
export class EchipaComponent implements OnInit {

  echipa = ECHIPA;
  selectedEchipa?: Echipa;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(ech: Echipa){
    this.selectedEchipa = ech;
  }

}
