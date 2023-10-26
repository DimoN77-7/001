import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountLogIn} from "../../shared/interfaces/account-login";
import {AccountRegistration} from "../../shared/interfaces/account-registration";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
// export class HeaderComponent {


// }
// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
export class HeaderComponent implements OnInit{
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
    this.showAuthWindow = true;
  }

  toggleAuthWindow() {
    // debugger
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
