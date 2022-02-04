import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthApiService } from "src/app/services/auth/auth-api.service";
import { LoginResponse } from "src/app/shared/login-interface";

@Injectable({
  providedIn: "root",
})
export class IsauthGuard implements CanActivate {
  constructor(public AuthService: AuthApiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      this.AuthService.getUserConnect()
        .pipe()
        .subscribe(
          (user: LoginResponse) => {
            this.router.navigate([""]);
            resolve(false);
          },
          (err) => {
            resolve(true);
          }
        );
    });
  }
}
