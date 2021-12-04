import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  imc1 : string = ""

  genuri: string[] = [
    'Masculin',
    'Feminin'
  ];


  
  constructor() {

  }

  ngOnInit(): void {
  }



  onCalculeazaIMC() {

    if(this.inaltime<100 || this.inaltime > 210 || this.varsta < 10 || this.varsta > 80){alert("Intorduceti o valoare reala!")
  } else{

    if (this.inaltime != null && this.varsta != null) {
      if (this.gen == "masculin") {
        this.imc = this.inaltime - 100 - ((this.inaltime - 150) / 4 + (this.varsta - 20) / 4);
      }
      if (this.gen == "feminin") {
        this.imc = this.inaltime - 100 - ((this.inaltime - 150) / 2, 5 + (this.varsta - 20) / 6);
      }
    }
  }
  
this.imc1 = this.imc.toString();    


  }



}
