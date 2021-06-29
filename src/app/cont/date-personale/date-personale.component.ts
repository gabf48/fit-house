import { User } from './../../auth/user.model';

import { Component, OnInit } from '@angular/core';
import { USERS } from './detalii-users';
import { Users } from './users';

@Component({
  selector: 'app-date-personale',
  templateUrl: './date-personale.component.html',
  styleUrls: ['./date-personale.component.css']
})
export class DatePersonaleComponent implements OnInit {

  emailUser : string;
  users : Users[] = [];

  constructor() { }

  ngOnInit(): void {
    const userData = localStorage.user;
    console.log(userData);
    this.emailUser = userData;
    this.findUsers();
  }

  findUsers() {
    USERS.forEach(user => {
      if(user.email === this.emailUser) {
        this.users.push(user);
      }
    });
   
    console.log(this.users);
  }

}
