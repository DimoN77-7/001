import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  public isLoggined() {
    /* canActivate: [AuthGuard] на ЛК -false пускает, true нет */
    return false;
  }
}
