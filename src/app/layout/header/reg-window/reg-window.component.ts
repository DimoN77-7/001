import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {AccountLogIn} from "../../../shared/interfaces/account-login";
import {AccountRegistration} from "../../../shared/interfaces/account-registration";
import {AccountService} from "../../../service/account.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-reg-window',
  templateUrl: './reg-window.component.html',
  styleUrls: ['./reg-window.component.scss'],
})
export class RegWindowComponent implements OnInit {

  signupUsers: any[]=[];
  signupObj: any = {
    name: '',
    login: '',
    password: ''
  };

  loginObj: any = {
  login: '',
  password: ''
};

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

  constructor(private accService: AccountService, private  route: Router) {}
  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);}
    // this.isAuthorized;
    // this.showAuthWindow == false? this.showAuthWindow = !this.isAuthorized
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
  goRegister(){
    this.accService.goRegister(this.signupObj).subscribe((res:any)=> {
      localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
      this.signupObj = {
            userName: '',
            login: '',
            password: '',
          };
      this.isRegistration = false;
      this.showAuthWindow = true;
      // console.log(this.signupUsers)
      // console.log('1')


    })

  }

  onLogin(){
    // debugger
    // const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    // if (isUserExist != undefined) {
    //   alert('User Login Successfully');
    // } else {
    //   alert('wrong credentials');
    this.accService.onLogin(this.loginObj).subscribe((res:any) =>{
      console.log('res',res);
      localStorage.setItem('token',res);
      // if (res.token != undefined) {
        this.route.navigateByUrl('/lk');
      // this.route.navigate(['/lk']);

      // } else {
        this.isRegistration = !this.isRegistration;
      this.showAuthWindow = !this.showAuthWindow;
      // }
      console.log(res);

    })
  }
// }



  toggleAuthWindow() {
    this.showAuthWindow = !this.showAuthWindow;
    this.isRegistration = false;
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

  //Да, я поменял phoneNumber на login, ибо на бэке доступен только вход по логину, а у меня вся заготовка была под номер телефона
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



// constructor() {
//
// }




