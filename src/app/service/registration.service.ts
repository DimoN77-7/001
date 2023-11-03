import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Advert} from "./swagger-service.inerface";
import {API_BASE} from "../../main";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private Obj = {
    name: "string",
    login: "string",
    password: "string",
  };

  constructor(private http: HttpClient) {}


  // onLogin(obj: any): Observable<any> {
  //   // return this.http.post<Advert[]>(`${API_BASE}/advert/search`, body)
  //   // return this.http.post('http://194.87.237.48:5000/Auth/Login', obj);
  //   return  this.http.post('http://194.87.237.48:5000/Auth/Register',obj);
  //   console.log(obj)
  // }

  // getCustomers(): Observable<any>{
  //   // debugger
  //   // return this.http.get("http://194.87.237.48:5000/Advert/search");
  //   return this.http.get("http://localhost:40392/api/Master/GetAllCustomer");
  // }
}
