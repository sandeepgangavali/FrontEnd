import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})

  export class AuthGuard implements CanActivate{
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let token = sessionStorage.getItem('currentUserToken');
        if (token) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;

    }

    constructor(private router: Router) { }


    
  }