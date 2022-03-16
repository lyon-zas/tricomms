import { Injectable } from '@angular/core';
import { NewUser } from '../pages/addNewUserClass/new-user';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIsService {

  newUsers: NewUser[] = [];
  newUser: NewUser = new NewUser(1,'','','','','','','','','');
  userId: number = -1;
  isEdit: Boolean = false;

  constructor() { }

  setNewUser(newUser: NewUser){
    return this.newUser = newUser;
  }

  getNewUser(){
    return this.newUser;
  }

  setNewUsers(newUser: NewUser){
    return this.newUsers.push(newUser);
  }

  getNewUsers(){
    return this.newUsers;
  }

  setIsEdit(isEdit: Boolean){
    return this.isEdit = isEdit;
  }
}
