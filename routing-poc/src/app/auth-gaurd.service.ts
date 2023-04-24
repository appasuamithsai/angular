import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/observable";

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {
    constructor(private authService : AuthService, private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): (Observable<boolean> | Promise<boolean> | boolean) {
        return this.authService.isAuthenticated().then(
            (authenticated)=>{
            if(authenticated){
                return true;
            }else {
                this.router.navigate(['/']);
            }
        });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):(Observable<boolean> | Promise<boolean> | boolean){
        return this.canActivate(childRoute,state);
    }
}