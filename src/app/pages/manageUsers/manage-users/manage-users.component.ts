import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChatsFileUploadComponent } from '../../materialPopUp/chats-file-upload/chats-file-upload.component';
import { NewUser } from '../../addNewUserClass/new-user';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  newUsers :NewUser[] = [];
  constructor(private dialog: MatDialog, private service: HttpAPIsService) { }

  openDialogPopUp(){
    let dialogRef = this.dialog.open(ChatsFileUploadComponent,{
      height:'94.5%',
      width: '50%'
    });
    dialogRef.afterClosed().subscribe((result: any)=>{
      console.log(`Dialog result: ${result}`);
    })
  }

  // getUsers(){
  //   this.newUsers = this.service.getNewUsers();
  // }

  ngOnInit(): void {
    // this.getUsers();
    this.newUsers = this.service.getNewUsers();
  }

}
