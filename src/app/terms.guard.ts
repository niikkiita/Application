import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterUserComponent } from './register-user/register-user.component';

@Injectable({
  providedIn: 'root'
})
export class TermsGuard implements CanDeactivate<RegisterUserComponent> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(window.confirm("Hope you read all terms carefully...")){

      return true
    }
    return false;
  }

}