import { Component, OnInit } from '@angular/core';
import { faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-orar',
  templateUrl: './orar.component.html',
  styleUrls: ['./orar.component.css']
})
export class OrarComponent implements OnInit {
 faSun = faSun;
 faSnowflake = faSnowflake;
  constructor() { }

  ngOnInit() {
  }

}
