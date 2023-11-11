import {Injectable, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExitAccService {
  public user_clear = new BehaviorSubject<string>("");
  public isLogined = new BehaviorSubject<boolean>(true);

  constructor() {}

  exitLog(){
    this.isLogined.next(false);
    this.isLogined.subscribe((v1)=>
      console.log(v1));
    // this.user_clear.next("Войти");
    // this.user_clear.subscribe((v1)=>
    //   console.log(v1));
    // this.user.subscribe((v1)=>
    //   this.name1 = v1)
  }

}
