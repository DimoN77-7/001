import { Component } from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {AccountRegistration} from "../../../shared/interfaces/account-registration";
import {AccountLogIn} from "../../../shared/interfaces/account-login";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

const user = new BehaviorSubject<any>('Да, вхожу');

@Component({
  selector: 'app-top-head',
  templateUrl: './top-head.component.html',
  styleUrls: ['./top-head.component.scss']
})
export class TopHeadComponent {
  public name1: string = '';
  public isLoggedIn = false;
  private userId = '';

  constructor(private  accountService: AccountService,private  route: Router) {
    this.accountService.currentUsers(this.userId).subscribe((x:any)=>{
      console.log(this.userId
      )
      user.next(x.name)
      user.subscribe((v1)=>
        this.name1 = x.name)
    })
  }

  onLogin(event: AccountLogIn) {
    this.accountService.onLogin(event).subscribe((res) => {
      /* res  -> token*/
      this.accountService.currentUsers(res).subscribe((x:any)=>{
        user.next(x.name)
        user.subscribe((v1)=>
          this.name1 = x.name)
      })

      if (typeof res === 'string') {
        localStorage.removeItem('token');
        localStorage.setItem('token', res);
        this.isLoggedIn = true;
        this.route.navigateByUrl('/lk');
      } else {
        console.error('Токен не был получен!');
      }});}

  goRegister(event: AccountRegistration) {
    console.log(event);
    this.accountService
      .goRegister(event)
      .subscribe((result) => (this.userId = result));
    console.log(this.userId)
  }

}
