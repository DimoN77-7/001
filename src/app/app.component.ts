import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./service/products.service";
import {Daum} from "./product/product.interface";
import {CompanysService} from "./service/companys.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {BredcrumbsComponent} from "./components/bredcrumbs/bredcrumbs.component";
import {ButtonModule} from "primeng/button";
import {EmojiListComponent} from "./shared/components/emoji-list/emoji-list.component";
import {HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./shared/error-interceptor";
import {NewComponent} from "./pages/ads/list/new/new.component";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./pages/ads/list/list.component";
// import {MainComponent} from "./pages/main/main.component";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: 'index.html',
  styleUrls: ['./app.component.scss'],
  /*Для работы ссылок через standAlone нужно импортировать сюда в @Component({  RouterOutlet, RouterLink*/
  /* И запровайдить маршруты provideRouter(routes) в main.ts bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],}).catch((err) => console.error(err));*/
  // imports: [RouterOutlet, RouterLink, HeaderComponent, BredcrumbsComponent, HeaderComponent,ButtonModule,EmojiListComponent,HttpClientModule],
  // standalone: true,
})

// export class AppComponent implements OnInit{
export class AppComponent {
  title = 'angular_lesson_001';

  /* чтобы отправить из компонента нужен сервис Router */
   constructor(private router: Router) {}
  /* goToCard() - метод, navigateByUrl- метод для нашего сервиса  */
   goToCard() {
    this.router.navigateByUrl('/ads/123?guid=РАБОТАЕТ');
   }

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

