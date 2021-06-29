import { Component, OnInit } from '@angular/core';
import { USERS } from '../cont/date-personale/detalii-users';
import { Users } from '../cont/date-personale/users';


@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  user = USERS;
  selectedUser?: Users;

  constructor() { }

  ngOnInit(): void {
 
     }

     onSelected(us: Users): void{
       this.selectedUser = us;
     }


}
