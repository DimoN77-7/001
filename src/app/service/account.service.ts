import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}


  onLogin(obj: any): Observable<any> {
    return this.http.post('http://194.87.237.48:5000/Auth/Login', obj);
    // return  http.post('http://194.87.237.48:5000/Auth/Register',obj);
  }

  getCustomers(): Observable<any>{
    // debugger
    // return this.http.get("http://194.87.237.48:5000/Advert/search");
    return this.http.get("http://localhost:40392/api/Master/GetAllCustomer");
  }
}


