import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AvailableComponent } from './available/available.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LeaveplanComponent } from './leaveplan/leaveplan.component';
import { LoginComponent } from './login/login.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'dashboard'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'available',component:AvailableComponent},
  {path:'leave',component:LeaveplanComponent},
  {path:'task',component:TaskComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'add-project', component:AddProjectComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'manage-leave',component:ManageLeaveComponent},
  {path:'assign-task',component:AssignTaskComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'add-employee',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
