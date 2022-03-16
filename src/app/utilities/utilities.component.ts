import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminAuthService } from '../AuthToken/adminAuth/admin-auth.service';


@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router, private route: ActivatedRoute, private adminAuth: AdminAuthService) { }


  viewProfilePage(){
    this.router.navigate(['/utilities/viewProfile'], {relativeTo: this.route})
  }

  editProfile(){
    this.router.navigate(['/utilities/editProfile'], {relativeTo: this.route})
  }
  routeToManageUsers(){
    this.router.navigate(['/pages/manageUsers'], {relativeTo: this.route})
  }
  routeToManageRole(){
    this.router.navigate(['/pages/manageRole'], {relativeTo: this.route})
  }
  accessControls(){
    this.router.navigate(['/pages/accessControl'], {relativeTo: this.route})
  }
  routeToUserActivity(){
    this.router.navigate(['/pages/userActivity'], {relativeTo: this.route})
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((elem)=>{
      if(elem.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side'
        this.sidenav.open();
      }
    })
  }

  adminLogOut(): void{
    this.adminAuth.adminLogOut();
  }

  ngOnInit(): void {
  }


}
