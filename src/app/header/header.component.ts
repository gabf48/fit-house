import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { faNewspaper, faUsers, faCalculator, faDollarSign, faImages, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
private userSub: Subscription;
faNewspaper = faNewspaper;
faUsers = faUsers;
faCalculator = faCalculator;
faDollarSign = faDollarSign;
faImages = faImages;
faCalendarAlt = faCalendarAlt;
  constructor(
    private authService: AuthService
    ) {}

    ngOnInit(){
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
    }


  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
