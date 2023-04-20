import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (route.data['roles'] &&
        route.data['roles'].indexOf(currentUser.id) === -1) {
        // role not authorised so redirect to home page
        if (currentUser.id == 1) {
          this.router.navigate(['upload']);
        } else if (currentUser.id == 2) {
          this.router.navigate(['approve']);
        } 
        return false;
      }
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
