import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router,private service : LoginService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null){
      let roles = next.data['permittedRoles'] as Array<string>;
      if(roles){
        if(this.service.roleMatch(roles)) return true;
        else{
          this.router.navigate(['/auth/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/auth/login']);
      return false;
    }

  }
}
