import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NewUser } from '../../addNewUserClass/new-user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';

@Component({
  selector: 'app-chats-file-upload',
  templateUrl: './chats-file-upload.component.html',
  styleUrls: ['./chats-file-upload.component.scss']
})
export class ChatsFileUploadComponent implements OnInit {

  newUsers: NewUser[] = [];

  userId: number = 1;
  userName: string = '';
  webMail: string = '';
  firstName: string = '';
  lastName: string = '';
  accountStatus: string = '';
  userRole: string = '';
  password: string | any = '';
  confirmPassword: string | any = '';
  profilePicture: any = '';

  newUser: NewUser = new NewUser(this.userId, this.userName, this.webMail, this.firstName, this.lastName, this.accountStatus,this.userRole,this.password,this.confirmPassword,this.profilePicture);
  constructor( private router: Router, private route:ActivatedRoute, private service: HttpAPIsService) {
  }

  newUserForm = new FormGroup({
    userName: new FormControl(''),
    webMail: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    accountStatus: new FormControl(''),
    userRole: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    profilePicture: new FormControl(''),
    userId: new FormControl(1)
  })

  submit(){
    this.newUser = this.newUserForm.getRawValue();
    this.service.setNewUsers(this.newUserForm.value);
    console.log("Arrays>>", this.newUserForm.value);
  }

  ngOnInit(): void {
    this.newUserForm.patchValue(this.service.getNewUser());
  }



}
