import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AccessLevel, AuthService } from 'src/app/core';

@Injectable({ providedIn: 'root' })
export class UserSecurityGuard implements CanActivate {

    constructor(private readonly authService: AuthService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.hasAccess(AccessLevel.Level3).pipe(
            first()
        );
    }

}
