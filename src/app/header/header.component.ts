import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {
  faNewspaper,
  faUsers,
  faCalculator,
  faDollarSign,
  faImages,
  faCalendarAlt,
  faUserFriends,
  faSignOutAlt,
  faUserCircle,
  faDumbbell,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';
import { Users } from '../cont/date-personale/users';
import { USERS } from '../cont/date-personale/detalii-users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  faNewspaper = faNewspaper;
  faUsers = faUsers;
  faCalculator = faCalculator;
  faDollarSign = faDollarSign;
  faImages = faImages;
  faCalendarAlt = faCalendarAlt;
  faUserFriends = faUserFriends;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;
  faDumbbell = faDumbbell;
  faAddressBook = faAddressBook;
  emailUser : string;
  x : boolean = false;
  users : Users[] = [];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    const userData = localStorage.user;
    console.log(userData);
    this.emailUser = userData;
    this.findUsers();
    this.checkAdmin();
  }

  findUsers() {
    USERS.forEach(user => {
      if(user.email === this.emailUser) {
        this.users.push(user);
      }
    });
   
    console.log(this.users);
  }

  checkAdmin(){
    if(this.emailUser == "antrenor@fithouse.com"){
      this.x = true;
      
    }
    console.log(this.x);
    return this.x;
  }


  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
