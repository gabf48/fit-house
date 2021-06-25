import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarife',
  templateUrl: './tarife.component.html',
  styleUrls: ['./tarife.component.css']
})
export class TarifeComponent implements OnInit {
  passenger: Passenger = new Passenger("Lord");

  titleArray: ValueAndText[] = [new ValueAndText("Mister", "Mister-Text"),
                                new ValueAndText("Lord", "Lord-Text")];

  
  constructor() { }

  ngOnInit(): void {
  }

}

class Passenger {
  constructor(public Title: string) { };
}
class ValueAndText {
  constructor(public Value: string, public Text: string) { }
}