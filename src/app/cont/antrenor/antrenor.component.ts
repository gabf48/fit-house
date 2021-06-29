import { Component, OnInit } from '@angular/core';
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
