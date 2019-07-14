import { AuthService } from "./auth.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";

Injectable();

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  //method canActivate gets params: actual route and state. We always take it from this router objects as below.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true;
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(["/admin/login"]);
    }
    //isAuth method added to if statement returns true or false depends on is user logged in or registered in.
    //it need to return true or promise /(or) observable that resolve to true. in other case gets error.
  }
}
