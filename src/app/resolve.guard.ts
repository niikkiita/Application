import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private authService: AuthService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.UserSubjectValue ? this.authService.UserSubjectValue : null;
  }


}