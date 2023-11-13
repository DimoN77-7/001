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

export class RegisterComponent  {

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
