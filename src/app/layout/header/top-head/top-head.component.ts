import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {AccountRegistration} from "../../../shared/interfaces/account-registration";
import {AccountLogIn} from "../../../shared/interfaces/account-login";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {ExitAccService} from "../../../service/exit-acc.service";



@Component({
  selector: 'app-top-head',
  templateUrl: './top-head.component.html',
  styleUrls: ['./top-head.component.scss']
})
export class TopHeadComponent implements OnInit{
  public user = new BehaviorSubject <any>('');
  public name1: string = '';
  public isLoggedIn = false;
  private userId = '';



  constructor(private  accountService: AccountService,private  route: Router, private exitAcc:ExitAccService) {
    // this.accountService.currentUsers(this.userId).subscribe((x:any)=>{
    //   console.log(this.userId
    //   )
    //   user.next(x.name)
    //   user.subscribe((v1)=>
    //     this.name1 = x.name)
    // })
  }
  ngOnInit(): void {
    this.exitAcc.isLogined.subscribe((v1)=> this.isLoggedIn = v1);
    this.exitAcc.user_clear.subscribe((v2) => this.name1= v2);
    console.log(this.name1)
    this.isLoggedIn = false;
  }

  onLogin(event: AccountLogIn) {
    this.accountService.onLogin(event).subscribe((res) => {
      // this.exitAcc.user_clear.subscribe((v2) => this.name1= v2);
      // this.exitAcc.user_clear.next("Войти")
      /* res  -> token*/
      // this.accountService.currentUsers(res).subscribe((x:any)=>{
      //   this.user.next(x.name)
      //   this.user.subscribe((v1)=>
      //     this.name1 = x.name)
      //   this.exitAcc.user_clear.next(x.name)})
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
