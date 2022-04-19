import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LazyauthGuard implements CanLoad {
  constructor(private authService: AuthService,private route: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.UserSubjectValue) {
        return true
      }
      window.alert("Please login to continue the service");
      this.route.navigate(['/home']);
      return false;
  }
}
