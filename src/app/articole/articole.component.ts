import { ARTICOLE } from './detaii-articole';
import { Articole } from './articole';
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

  articles = ARTICOLE;
  selectedArticol?: Articole;
  isCollapsed: boolean[] = [true]; 
  constructor() { }

  ngOnInit() {
  }

  onSelect(art: Articole): void{
    this.selectedArticol = art;
  }

  

}
