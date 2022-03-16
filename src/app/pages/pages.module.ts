import { NgModule } from '@angular/core';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ChatComponent } from './chats/chat/chat.component';
import { ChannelsComponent } from './channels/channels/channels.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChatsFileUploadComponent } from './materialPopUp/chats-file-upload/chats-file-upload.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

import { FilterPipe } from '../searchFilter/filterContacts/filter.pipe';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { ManageRoleComponent } from './manageRole/manage-role/manage-role.component';
import { AccessContolComponent } from './accessControls/access-contol/access-contol.component';
import { UserActivityComponent } from './userActivities/user-activity/user-activity.component';
import {MatDialogModule} from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms';


const materialModules = [
  MatTabsModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSortModule,
  MatCardModule,
  MatDialogModule
]

const otherUtilities = [
  FilterPipe
]


@NgModule({
  declarations: [
    PagesComponent,
    ChatComponent,
    ChannelsComponent,
    TasksComponent,
    CalendarComponent,
    ChatsFileUploadComponent,
    ManageUsersComponent,
    ManageRoleComponent,
    AccessContolComponent,
    UserActivityComponent
  ],
  imports: [
    PagesRoutingModule,
    UtilitiesModule,
    materialModules,
    ReactiveFormsModule
    // otherUtilities
  ],
  exports: [
    materialModules,
    // otherUtilities
  ],

  entryComponents: [
    ChatsFileUploadComponent
  ]

})
export class PagesModule { }
