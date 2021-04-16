import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../_services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private loginService: LoginService) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (await this.loginService.isAuthenticated().toPromise()) {
            return true;
        }

        this.router.navigate(['/access']);
        return false;
    }
}