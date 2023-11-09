import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_BASE} from "../../main";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";


// const user = new BehaviorSubject<number>(1);
// user
// user.next(1);
// user.next(2);
// user.subscribe(val => {
//   console.log('first', val );
//   user.next(3);
//   user.next(4);
// });



@Injectable({
  providedIn: 'root'
})
export class UserService {




  private obj = {
    name: "string",
    login: "string",
    password: "string",
    id: "string",
  };

  constructor(private http: HttpClient) {
    // user.next(2);
    // user.subscribe((v1) =>
    //   console.log(`1st: ${v1}`))
    // // console.log()
  }


  isloggined() {
    return true;
  }

  currentUsers(user: any): Observable<any> {
    return this.http.get(`${API_BASE}/Users/current`, user);
  }



  // allUsers(obj: any): Observable<any> {
  //   return this.http.get(`${API_BASE}/Users`, obj);
  //   // return  http.post('http://194.87.237.48:5000/Auth/Register',obj);
  // }


 idUser(id:string): Observable<any> {
   return this.http.get<any>(`${API_BASE}/Users/`+ id);
  }



}
