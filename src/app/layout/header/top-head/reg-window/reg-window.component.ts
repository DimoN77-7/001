import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {AccountLogIn} from "../../../../shared/interfaces/account-login";
import {AccountRegistration} from "../../../../shared/interfaces/account-registration";
import {AccountService} from "../../../../service/account.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Account} from "../../../../shared/interfaces/account.interface";
import {API_BASE} from "../../../../../main";
import {UserService} from "../../../../service/user.service";
import {BehaviorSubject} from "rxjs";

const user = new BehaviorSubject<any>('Да, вхожу');

@Component({
  selector: 'app-reg-window',
  templateUrl: './reg-window.component.html',
  styleUrls: ['./reg-window.component.scss'],
})
export class RegWindowComponent implements OnInit {

   public name1: string = '';

 public id: any;
  public account: any;
  signupUsers: any[]=[];
   public signupObj: any = {
    name: '',
    login: '',
    password: ''
      };

   public loginObj: any = {
      login: '',
      password: ''
      };
  // @Input() user: any;
  @Input() isAuthorized: string = '';
  @Output() public loginData = new EventEmitter<AccountLogIn>();
  @Output() public registerData = new EventEmitter<AccountRegistration>();

  public showRegWindow = false;
  public rememberMe = false;
  public Registration = false;
  private PhoneNumber = '';
  private password = '';

  constructor(private accService: AccountService, private userserv: UserService ) {}
  ngOnInit() {
    this.name1 = user.value;
    this.isAuthorized;

    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);}
  }

  clickRegWindow() {
    this.showRegWindow = !this.showRegWindow;
    this.Registration = false;
  }


  setPhoneNumber(event: any): void {
    this.PhoneNumber = event.target.value;
  }
  Password(event: any): void {
    this.password = event.target.value;
  }

  clickLogIn(): void {
    console.log(this.loginObj);
    this.loginData.emit(this.loginObj);
  }

  clickRegistration(): void {
    console.log(this.signupObj);
    this.registerData.emit(this.signupObj);
    this.Registration = !this.Registration;

  }
  clickRegisterForm() {
    this.Registration = !this.Registration;
  }
}

  // onSignUp() {
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  //   this.signupObj = {
  //     userName: '',
  //     login: '',
  //     password: '',
  //   };
  // }


  // goRegister(){
  //   this.accService.goRegister(this.signupObj).subscribe((res:any)=> {
  //     this.id = res;
  //     this.account = this.signupObj;
  //     console.log(this.account.name);
  //     user.next(this.account.name);
  //     localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  //     this.signupObj = {
  //           name: '',
  //           login: '',
  //           password: '', };
  //     this.isRegistration = false;
  //     this.showAuthWindow = true;
  //
  //   })
  // }

  // onLogin(){
  //   // debugger
  //   // const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  //   // if (isUserExist != undefined) {
  //   //   alert('User Login Successfully');
  //   // } else {
  //   //   alert('wrong credentials');
  //   this.accService.onLogin(this.loginObj).subscribe((res:any) =>{
  //     this.userserv.currentUsers(res).subscribe((x:any)=>{
  //       user.next(x.name)
  //       user.subscribe((v1)=>
  //       this.name1 = x.name)
  //      // document.getElementsByClassName('login-btn')[0].textContent = `${x.name}`;
  //       })
  //     localStorage.setItem('token',res);
  //     // if (res.token != undefined) {
  //       this.route.navigateByUrl('/lk');
  //     // this.route.navigate(['/lk']);
  //       this.isRegistration = !this.isRegistration;
  //     this.showAuthWindow = !this.showAuthWindow;
  //     this.login_btn = false;
  //     this.login_btn1 = true;
  //     this.ShowUserMenu = !this.ShowUserMenu;
  //     // this.ShowUserMenu = !this.ShowUserMenu;
  //     // }
  //     console.log(res);
  //   })
  // }
// }








