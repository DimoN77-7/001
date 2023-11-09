import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainRoutingModule} from "../main/main-routing.module";
import {AccountService} from "../../service/account.service";
import {Router} from "@angular/router";
import {AccountLogIn} from "../../shared/interfaces/account-login";
import {AccountRegistration} from "../../shared/interfaces/account-registration";




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',],
  imports: [CommonModule, ReactiveFormsModule,MainRoutingModule,FormsModule],
  standalone: true
})

export class RegisterComponent implements OnInit {
  @Input() isAuthorized: string = '';
  @Output() public loginDataEmmiter = new EventEmitter<AccountLogIn>();
  @Output() public registerDataEmmiter =
    new EventEmitter<AccountRegistration>();

  public showAuthWindow = false;
  public rememberMe = false;
  public isRegistration = false;
  private name = '';
  private PhoneNumber = '';
  private password = '';

  constructor() {}
  ngOnInit() {
    this.isAuthorized;
    // this.showAuthWindow == false? this.showAuthWindow = !this.isAuthorized
    // this.showAuthWindow = true;
  }

  toggleAuthWindow() {
    // debugger
    // this.showAuthWindow = !this.showAuthWindow;
    // this.isRegistration = false;
  }

  rememberMeFunction(): void {
    this.rememberMe = !this.rememberMe;
  }

  setName(event: any): void {
    this.name = event.target.value;
  }
  setPhoneNumber(event: any): void {
    this.PhoneNumber = event.target.value;
  }
  setPassword(event: any): void {
    this.password = event.target.value;
  }


  submitLogIn(): void {
    let loginObj = {
      login: this.PhoneNumber,
      password: this.password,
    };
    this.loginDataEmmiter.emit(loginObj);
  }
  submitRegistration(): void {
    let registerObj = {
      name: this.name,
      login: this.PhoneNumber,
      password: this.password,
    };
    this.registerDataEmmiter.emit(registerObj);
  }
  goToRegisterForm() {
    this.isRegistration = !this.isRegistration;
  }
}



// export class RegisterComponent implements OnInit{
//  signupUsers: any[]=[];
//  signupObj: any = {
//    userName: '',
//    password: ''
//  };
//  loginObj: any={
//    name: '',
//    login: '',
//    password: ''
//  };
//
//
//   constructor(private accService: AccountService, private route: Router) {}
//
//   ngOnInit(): void {
//     const localData = localStorage.getItem('signUpUsers');
//     if(localData != null) {
//       this.signupUsers = JSON.parse(localData);
//
//     }
//   }
//     onSignup(){
//       this.signupUsers.push(this.signupObj);
//       localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
//       this.signupObj = {
//         userName: '',
//         password: ''
//       }
//
//     }
//     onLogin(){
//     debugger
//     // const isUserExist = this.signupUsers.find(m => m.userName  ==  this.loginObj.userName && m.password == this.loginObj.password);
//     // if (isUserExist != undefined) {
//     //   alert('User Login Successfully');
//     // } else {
//     //   alert('Wrong credentials');
//     // }
//       this.accService.onLogin(this.loginObj).subscribe((res: any) => {
//         debugger
//       console.log('res',res);
//       localStorage.setItem('token',res.token);
//       this.route.navigateByUrl('/lk');
//       })
//
//     }
//
//
//
//   public form: FormGroup = new FormGroup({
//     login: new FormControl(),
//     password: new FormControl(),
//   });
// }
