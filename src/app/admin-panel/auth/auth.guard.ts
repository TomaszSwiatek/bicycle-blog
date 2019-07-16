import { AuthService } from "./auth.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  //method canActivate gets params: actual route and state. We always take it from this router objects as below.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(["/admin/login"]);
      return false;
    }
    //isAuth method added to if statement returns true or false depends on is user logged in or registered in.
    //it need to return true or promise /(or) observable that resolve to true. in other case gets error.
  }
}
