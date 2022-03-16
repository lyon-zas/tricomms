import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginPageComponent,
    AdminLoginComponent
  ]
})
export class LoginPageModule { }
