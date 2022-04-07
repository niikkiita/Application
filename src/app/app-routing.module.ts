import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvailableComponent } from './available/available.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeaveplanComponent } from './leaveplan/leaveplan.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'dashboard'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'available',component:AvailableComponent},
  {path:'leave',component:LeaveplanComponent},
  {path:'task',component:TaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
