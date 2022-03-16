import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChannelsComponent } from './channels/channels/channels.component';
import { ChatComponent } from './chats/chat/chat.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { ChatsFileUploadComponent } from './materialPopUp/chats-file-upload/chats-file-upload.component';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { ManageRoleComponent } from './manageRole/manage-role/manage-role.component';
import { AccessContolComponent } from './accessControls/access-contol/access-contol.component';
import { UserActivityComponent } from './userActivities/user-activity/user-activity.component';

const routes: Routes = [
  { path: 'pages', component: PagesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'chats', component: ChatComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addNewUser', component: ChatsFileUploadComponent},
  {path: 'manageUsers', component: ManageUsersComponent},
  {path: 'manageRole', component: ManageRoleComponent},
  {path: 'accessControl', component: AccessContolComponent},
  {path: 'userActivity', component: UserActivityComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
