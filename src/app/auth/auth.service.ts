import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from './user.model';
import { environment } from '../../environments/environment'


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTime: any;

    constructor(private http: HttpClient, private router: Router) {

    }
    signup(email: string, password: string){
        return this.http
        .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
            {
            email: email,
            password: password,
            returnSecureToken: true
            }
        )   
        .pipe(
            catchError(this.handleError),
            tap(resData => {
              this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
              );
            })
          );
      }


    login(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey, 
       {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
}

autoLogin() {
  const userData: {
    email: string;
    id: string;
    _token:string;
    _tokenExpirationDate: string;
  } = JSON.parse(localStorage.getItem('userData'));
  if(!userData){
    return;
  }

  const loadedUser = new User(
    userData.email, 
    userData.id, 
    userData._token, 
    new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
}

logout(){
  this.router.navigate(['/auth']);
  this.user.next(null);
  localStorage.removeItem('userData');
  if (this.tokenExpirationTime){
    clearTimeout(this.tokenExpirationTime);
  }
  this.tokenExpirationTime = null;
}

autoLogout(expirationDuration: number){
  this.tokenExpirationTime = setTimeout(() => { 
    this.logout();
  },expirationDuration); 
}

private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('user', email);
  }

    

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'Eroare!';
        if (!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Acest email există deja în baza de date! Pentru a recupera parola, contactează personalul sălii de sport.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Acest cont nu există în baza de date. Poți să-ți creezi un cont chiar acum.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Parolă greșită. Pentru recuperarea parolei contactează personalul sălii de sport.';
                break;
             }
    return throwError(errorMessage);

            }

}
