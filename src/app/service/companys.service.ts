import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../company/company.interface";

@Injectable({
  providedIn: 'root'
})
export class CompanysService {

  constructor(private _http: HttpClient) { }

  getProducts():Observable<Root> {
    return  this._http.get<Root>('https://fakerapi.it/api/v1/companies?_quantity=1')
  }}
