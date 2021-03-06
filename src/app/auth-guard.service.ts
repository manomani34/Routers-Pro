import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanActivateChild {


  constructor(private loginService: LoginServiceService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate( childRoute , state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | Observable<boolean> |  Promise<boolean>  {
    return this.loginService.isAutenticated().then(
      (auth: boolean) => {
        if (auth) {
          return true;
        }
        else {
          this.router.navigate(['/']);
          return false;
        }
      }
    )
  }
}
