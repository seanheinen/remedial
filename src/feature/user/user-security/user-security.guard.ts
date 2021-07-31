import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserSecurityGuard implements CanActivate {
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        return false;
    }

}
