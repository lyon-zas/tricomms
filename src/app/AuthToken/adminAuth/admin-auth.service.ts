import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  setAdminToken(adminToken: string){
    localStorage.setItem('adminToken', adminToken);
  }

  getAdminToken(): string | null{
    return localStorage.getItem('adminToken');
  }

  adminIsLoggedIn(){
    return this.getAdminToken !== null;
  }

  adminLogOut(){
    localStorage.removeItem('adminToken');
    this.router.navigate(['/LoginPage/adminLoginPage'], {relativeTo: this.route});
  }

  adminLogIn({adminMail, adminPassword}: any): Observable<any>{
    if(adminMail == 'admin@tricomms.com' && adminPassword == 'admin123'){
      this.setAdminToken('adminToken');
      return of(
        {
        name: 'admin',
        adminMail: 'admin@tricomms.com'
        }
      )
    }
    return throwError(new Error("You're not an admin...please get out!!!"));
  }

}
