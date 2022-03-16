import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from 'src/app/AuthToken/adminAuth/admin-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLogOutGuard implements CanActivate {

  constructor(private adminAuth: AdminAuthService, private router: Router, private route: ActivatedRoute){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(!this.adminAuth.adminIsLoggedIn()){
       this.router.navigate(['/LoginPage/adminLoginPage'],{relativeTo:this.route});
       return false;
      }
    return this.adminAuth.adminIsLoggedIn();
  }

}
