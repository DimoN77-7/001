// import {Component, OnInit} from '@angular/core';
import {Component} from '@angular/core';
// import {ProductsService} from "./service/products.service";
// import {Daum} from "./product/product.interface";

import {CompanysService} from "./service/companys.service";
import {Daum} from "./company/company.interface";
// import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {RouterOutlet, RouterLink } from "@angular/router";

import {HeaderComponent} from "./layout/header/header.component";
import {BredcrumbsComponent} from "./components/bredcrumbs/bredcrumbs.component";
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: 'index.html',
  styleUrls: ['./app.component.scss'],
  // styleUrls: ['dz_1.css']
  imports: [RouterOutlet, RouterLink, HeaderComponent, BredcrumbsComponent, HeaderComponent,ButtonModule],
  // imports: [RouterOutlet],
  standalone: true,
})

// export class AppComponent implements OnInit{
export class AppComponent {
  title = 'angular_lesson_001';
  // constructor(private router: Router) {}

  // goToCard() {
  //   this.router.navigateByUrl('/ads/123?guid=РАБОТАЕТ');
  // }

  // products: Daum[] = []
  // companys: Daum[] = []
  //
  // // constructor(private _produtService: ProductsService) { }
  // constructor(private _produtService: CompanysService) { }

// ngOnInit() {
//   this._produtService.getProducts().subscribe(resp => {
//     this.companys = resp.data
//
//     // this._produtService.getProducts().subscribe(resp => {
//     //   this.products = resp.data
//       // console.log('this.products', this.products);
//     })
// }

}
