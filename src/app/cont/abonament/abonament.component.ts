
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { USERS } from '../date-personale/detalii-users';
import { Users } from '../date-personale/users';


@Component({
  selector: 'app-abonament',
  templateUrl: './abonament.component.html',
  styleUrls: ['./abonament.component.css']
})
export class AbonamentComponent implements OnInit {
 
  constructor() { }
  days: number;
  expiration: number;
  currentData: string;
  today = new Date();
  dd: string;
  mm: string;
  yyyy: number;

  ngOnInit(): void {
    this.getDifferenceInDays(this.date1,this.date2);
    this.getCurrentData();

  }

   date1 = new Date('7/01/2021');
   date2 = new Date('7/31/2010');
   date4 = this.date1.toLocaleDateString();


   
   getDifferenceInDays1(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    console.log(diffInMs);
    this.expiration = diffInMs / (1000 * 60 * 60 * 24)
    return this.expiration;
  }

  getDifferenceInDays(date1, days) {
    const diffInMs = Math.abs(days + date1);
    console.log(diffInMs);
    this.days = diffInMs / (1000 * 60 * 60 * 24)
    return this.days;
  }
 
  getCurrentData(){
   
    this.dd = String(this.today.getDate()).padStart(2, '0');
    this.mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
    this.yyyy = this.today.getFullYear();

   this.currentData = this.mm + '/' + this.dd + '/' + this.yyyy;
   console.log(this.currentData);
  }

  
  


}
