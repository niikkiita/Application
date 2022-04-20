import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TaskComponent } from './task/task.component';
import { AvailableComponent } from './available/available.component';

import { ProfileComponent } from './profile/profile.component';
import { LeaveplanComponent } from './leaveplan/leaveplan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AddProjectComponent } from './add-project/add-project.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AllTaskStatusComponent } from './all-task-status/all-task-status.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserprofileComponent,
    TaskComponent,
    AvailableComponent,
    ProfileComponent,
    LeaveplanComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AddProjectComponent,
    EmployeeListComponent,
    ManageLeaveComponent,
    AssignTaskComponent,
    AddEmployeeComponent,
    ForgotPasswordComponent,
    AllTaskStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
