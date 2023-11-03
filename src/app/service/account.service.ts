import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_BASE} from "../../main";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}


  onLogin(obj: any): Observable<any> {
    return this.http.post(`${API_BASE}/Auth/Login`, obj);
    // return  http.post('http://194.87.237.48:5000/Auth/Register',obj);
  }

  goRegister(obj: any): Observable<any> {
    return this.http.post<any>(`${API_BASE}/Auth/Register`, obj);
  }



}


