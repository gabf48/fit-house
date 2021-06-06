import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  imc: number;
  gen = 'masculin';
  name1: number = null;
  name2: number = null;



  genuri: string[] = [
    'Masculin',
    'Feminin'
  ];
  constructor() {
    
   }

  ngOnInit(): void {
  }

  // radioChangeHandler(event: any){
  //   this.gen = event.target.value;
  // }

  onCalculeazaIMC(){

    if (this.gen == "masculin"){
   this.imc = 100;
  }

  if (this.gen == "feminin"){
    this.imc = 200;
  }
}

}
