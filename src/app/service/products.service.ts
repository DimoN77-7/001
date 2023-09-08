import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {observableToBeFn} from "rxjs/dist/types/internal/testing/TestScheduler";
// import {Observable} from "rxjs/dist/types";
import {Observable} from "rxjs";
import {Root} from "../product/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts():Observable<Root> {
     return  this._http.get<Root>('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid')
   }}
