import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  imc: number;
  gen: string = '';
  genuri: any = [
    'Masculin',
    'Feminin'
  ];
  constructor() {
    
   }

  ngOnInit(): void {
  }

  radioChangeHandler(event: any){
    this.gen = event.target.value;
  }

  onCalculeazaIMC(){
    this.imc = 10;
  }

}
