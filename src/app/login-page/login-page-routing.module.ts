import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'loginAuthentication', component: LoginPageComponent}, // canActivate: [LoginPageComponent]
  {path: 'adminLoginPage', component: AdminLoginComponent} // canActivate: [AdminLoginComponent]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
