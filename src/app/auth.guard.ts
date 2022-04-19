import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // put logic here

    if (!this.authService.onSubmit()) {
    window.alert("Please login to continue the service");
    this.route.navigate(['/home']);
      return false;
    }
    return true;



    // if (this.authService.UserSubjectValue) {
    //   return true
    // }
    
    // return false;

    }
  }