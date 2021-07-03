
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { USERS } from '../date-personale/detalii-users';
import { Users } from '../date-personale/users';


@Component({
  selector: 'app-antrenor',
  templateUrl: './antrenor.component.html',
  styleUrls: ['./antrenor.component.css']
})
export class AntrenorComponent implements OnInit {
  emailUser : string;
  users : Users[] = [];
  constructor(private fb: FormBuilder) { }
 
  hourForm: FormGroup;
  hours = ['8:00', '8:30', '9:00','9:30','10:00','10:30','11:00','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']

 

  ngOnInit(): void {
    
    const userData = localStorage.user;
    console.log(userData);
    this.emailUser = userData;
    this.findUsers();

    this.hourForm = this.fb.group({
      hourControl: ['8:00']
    });
  }

  findUsers() {
    USERS.forEach(user => {
      if(user.email === this.emailUser) {
        this.users.push(user);
      }
    });
   
    console.log(this.users);
  }

  selectedDate:any; 
onChangeDate(value)
  {
    this.selectedDate = value;
    console.log(this.selectedDate);
  }




}
