import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { LoginAuthService } from '../AuthToken/login-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutFirstGuard implements CanActivate {
  constructor(private auth: LoginAuthService, private router: Router, private route: ActivatedRoute){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean{
      if(!this.auth.isLoggedIn()){
        this.router.navigate(['/LoginPage/loginAuthentication'],{relativeTo: this.route});
        return false;
      }
    return this.auth.isLoggedIn();
  }

}
