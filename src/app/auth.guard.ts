import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import {Observable} from "rxjs";
import {UserService} from "./user.service";



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService) {}
  /*canActivate меняет активацию маршрутизации для текущего маршрута и дочерних
  * все гварды возвращают true или false или UrlTree - для редиректа на другую страницу
  * в виде promise или Observable  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.isLoggined();
  }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(route, state);
  }
}


// export const authGuard: CanActivateFn = (
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot) => {
//   // constructor(private userService: UserService) {
//     return this.userService.isLoggined();
//   };

// };

// export class AuthGuard {
//   constructor(private userService: UserService ) {
//   }
  // CanActivateFn = (route, state) => {
  //   // return true;
  //   return this.userService.isLoggined();
  // };

// }
