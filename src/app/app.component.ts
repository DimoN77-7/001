import {Component, OnInit} from '@angular/core';
// import {ProductsService} from "./service/products.service";
// import {Daum} from "./product/product.interface";

import {CompanysService} from "./service/companys.service";
import {Daum} from "./company/company.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: 'index.html',
  styleUrls: ['./app.component.scss']
  // styleUrls: ['dz_1.css']
})
export class AppComponent implements OnInit{
  title = 'angular_lesson_001';

  // products: Daum[] = []
  companys: Daum[] = []

  // constructor(private _produtService: ProductsService) { }
  constructor(private _produtService: CompanysService) { }

ngOnInit() {
  this._produtService.getProducts().subscribe(resp => {
    this.companys = resp.data

    // this._produtService.getProducts().subscribe(resp => {
    //   this.products = resp.data
      // console.log('this.products', this.products);
    })
}

}
