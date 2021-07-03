
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
  x: number;
  currentDataMiliseconds: number;
  expiration: number;
  expiration1: number;
  currentData: string;
  remainsDays: number;
  today = new Date();
  dataExpirare = new Date();
  dd: string;
  mm: string;
  yyyy: number;
  text : String;
  titlu : String;



  ngOnInit(): void {
    this.getDifferenceInDays(this.dataStart, this.date2);
    this.getCurrentData();
    this.add30Days();
    this.returnDaysUntilAbonamentExpiration();
    this.displayAlert();
  }

  //data inceput
  dataStart = new Date('5/5/2021');


  date2 = new Date('7/31/2010');

  //transformare data inceput in MM/DD/YYYY
  dateStartFinal = this.dataStart.toLocaleDateString();



  add30Days() {
    this.x = this.dataStart.setMilliseconds(0);
    this.x = this.x + 2592000000;
    const dateObect = new Date(this.x);
    this.dataExpirare = dateObect;
    return this.dataExpirare.toLocaleDateString();
  }




  getDifferenceInDays1(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    this.expiration = diffInMs / (1000 * 60 * 60 * 24)
    return this.expiration;
  }

  getDifferenceInDays(date1, days) {
    const diffInMs = Math.abs(days + date1);
    this.days = diffInMs / (1000 * 60 * 60 * 24)
    return this.days;
  }

  returnDaysUntilAbonamentExpiration() {
    const diffInMs = this.x - this.currentDataMiliseconds;
    console.log('1 ' + this.x);
    console.log('2 ' + this.currentDataMiliseconds);
    this.remainsDays = Math.round(diffInMs / 60000 / 60 / 24)-1;
    return this.remainsDays;
  }

  getCurrentData() {
    this.dd = String(this.today.getDate()).padStart(2, '0');
    this.mm = String(this.today.getMonth() + 1).padStart(2, '0');
    this.yyyy = this.today.getFullYear();

    this.currentData = this.mm + '/' + this.dd + '/' + this.yyyy;
    const currentDate = new Date();
    this.currentDataMiliseconds = currentDate.getTime();
  }

  displayAlert(){
    if(this.remainsDays < 0){
      this.titlu = "Abonament expirat!"
      this.text = "Abonament tau a expirat de " 
      this.remainsDays = this.remainsDays * (-1);
    } else {
      this.titlu = "Până la expirarea abonamentului mai sunt:"
    }
  }





}
