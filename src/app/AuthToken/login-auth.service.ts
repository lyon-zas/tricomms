import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private router: Router, private route: ActivatedRoute) { }
  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/LoginPage/loginAuthentication'], {relativeTo: this.route});
  }

  login({userMail, password}: any): Observable<any>{
    if(
      userMail == 'orimoladeeyimofe@gmail.com'  && password == 'Orimolade1'
      ){
      this.setToken('TriComms');
      return of(
        {
          name: 'Orimolade Eyimofe',
          userMail: 'orimoladeeyimofe@gmail.com'
        }
        )
    }
    return throwError(new Error('failed to Login'))
  }


}
