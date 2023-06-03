import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentAddFormComponent } from './agent-add-form/agent-add-form.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminLoginFormComponent } from './Components/admin-login-form/admin-login-form.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { StartViewComponent } from './start-view/start-view.component';
import { NotifComponent } from './notif/notif.component';
import { SucccessComponent } from './succcess/succcess.component';

const routes: Routes = [
  {path:'', redirectTo:'/adminLogIn',pathMatch:'full'},
  {path:'adminLogIn', component: AdminLoginFormComponent},
  {path:'adminHome',component: AdminHomeComponent },
  {path:'adminAddAgent',component:AgentAddFormComponent},
  {path:'adminListAgents',component:ListAgentsComponent},
  {path:'adminProfile',component:StartViewComponent},
  {path:'adminNotif',component:NotifComponent},
  {path:'adminSucess',component:SucccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
