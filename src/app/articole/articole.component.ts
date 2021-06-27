import { Component, OnInit } from '@angular/core';
import {
  faDumbbell,
  faHandsHelping,
  faUtensils,
  faBirthdayCake,
  faTshirt,
  faPrescriptionBottle,
  faBed,
  faRunning,
  faDna
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articole',
  templateUrl: './articole.component.html',
  styleUrls: ['./articole.component.css']
})
export class ArticoleComponent implements OnInit {
  faDumbbell = faDumbbell;
  faHandsHelping = faHandsHelping;
  faUtensils = faUtensils;
  faBirthdayCake = faBirthdayCake;
  faTshirt = faTshirt;
  faPrescriptionBottle = faPrescriptionBottle;
  faBed =  faBed;
  faRunning = faRunning;
  faDna = faDna;
  constructor() { }

  ngOnInit(): void {
  }

}
