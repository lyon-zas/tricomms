import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  resetMail: string | any = '';
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  toLoginPage(){
    this.router.navigate(['/LoginPage/loginAuthentication'],{relativeTo: this.route});
  }

  resetPassword = this.fb.group({
    resetMail: ['', Validators.required]
  })

  submit(){
    this.resetPassword.get(this.resetMail);
    console.log('resetMail>>', this.resetPassword.value);

    let inputResetMail = <HTMLInputElement>document.getElementById('inputResetEmail1')
    inputResetMail.value = '';
  }

  ngOnInit(): void {
  }

}
