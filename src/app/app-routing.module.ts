import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllTaskStatusComponent } from './all-task-status/all-task-status.component';
import { AppComponent } from './app.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AuthGuard } from './auth.guard';
import { AvailableComponent } from './available/available.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LeaveplanComponent } from './leaveplan/leaveplan.component';
import { LoginComponent } from './login/login.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'available',component:AvailableComponent,canActivate:[AuthGuard]},
  {path:'leave',component:LeaveplanComponent,canActivate:[AuthGuard]},
  {path:'task',component:TaskComponent,canActivate:[AuthGuard]},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'add-project', component:AddProjectComponent,canActivate:[AuthGuard]},
  {path:'employee-list',component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path:'manage-leave',component:ManageLeaveComponent,canActivate:[AuthGuard]},
  {path:'assign-task',component:AssignTaskComponent,canActivate:[AuthGuard]},
  {path:'employee-list',component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path:'add-employee',component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:'all-task-status',component:AllTaskStatusComponent,canActivate:[AuthGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
