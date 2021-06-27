import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  imc: number;
  gen = 'masculin';
  inaltime: number = null;
  varsta: number = null;
  dif: number = this.inaltime - 150;
  dif2: number = this.varsta - 20;


  genuri: string[] = [
    'Masculin',
    'Feminin'
  ];

  constructor() {

  }

  ngOnInit(): void {
  }



  onCalculeazaIMC() {
    if (this.inaltime != null && this.varsta != null) {
      if (this.gen == "masculin") {
        this.imc = this.inaltime - 100 - ((this.inaltime - 150) / 4 + (this.varsta - 20) / 4);
      }
      if (this.gen == "feminin") {
        this.imc = this.inaltime - 100 - ((this.inaltime - 150) / 2, 5 + (this.varsta - 20) / 6);
      }
    }
    
  }


}
