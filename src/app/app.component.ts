import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./service/products.service";
import {Daum} from "./product/product.interface";
import {CompanysService} from "./service/companys.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {BredcrumbsComponent} from "./components/bredcrumbs/bredcrumbs.component";
import {EmojiListComponent} from "./shared/components/emoji-list/emoji-list.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./shared/error-interceptor";
import {NewComponent} from "./pages/ads/list/new/new.component";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./pages/ads/list/list.component";
import {Advert} from "./service/swagger-service.inerface";
import {API_BASE} from "../main";
import {Observable} from "rxjs";
// import {MainComponent} from "./pages/main/main.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: 'index.html',
  styleUrls: ['./app.component.scss'],
  /*Для работы ссылок через standAlone нужно импортировать сюда в @Component({  RouterOutlet, RouterLink*/
  /* И запровайдить маршруты provideRouter(routes) в main.ts bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],}).catch((err) => console.error(err));*/
})

// export class AppComponent implements OnInit{
export class AppComponent {
    title = 'Da_Vito';
  // public id: any[]=[];
  // userName: string = "";
  // response: any;
  public adverts: Advert[]=[];
  //
  // // getAdverts(): Observable<Advert[]> {
  getAdverts(): void {
    const body = {
      search: "",
      showNonActive: true
    };
  //   // return this.http.post<Advert[]>(`${API_BASE}/advert/search`, body);
     this.http.post<Advert[]>(`${API_BASE}/advert/search`, body)
       .subscribe(res => this.adverts = res)
  // //   // console.log(this.res)
  };
  //
  constructor(private http: HttpClient, private route: Router) {
    this.getAdverts()
    // this.adverts =[];
    // this.getAdverts().subscribe((response) =>{
    //   this.response = response;
    //   console.log(this.response);
    // })
  }
  //

  // imageSrcCreator(id:string) : string {
  //   if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
  //   let src = `${API_BASE}/images/${id}`;
  //   return src
  // }



  // search() {
  //   // this.http.get('http://194.87.237.48:5000/Advert/0c806d00-461b-4464-9a01-4e955c6a960d')
  //   this.getAdverts()
  //   // this.http.get('https://api.github.com/user/' + this.userName)
  //   // http://194.87.237.48:5000/Advert/0c806d00-461b-4464-9a01-4e955c6a960d
  //   // this.http.get('http://194.87.237.48:5000/Users/')
  //   // http://194.87.237.48:5000
  //     .subscribe((response) =>{
  //       this.response = response;
  //       console.log(this.response);
  //     })
  // }





  // /* чтобы отправить из компонента нужен сервис Router */
  //  constructor(private router: Router) {}
  /* goToCard() - метод, navigateByUrl- метод для нашего сервиса  */
   goToCard() {
    this.route.navigateByUrl('/ads/123?guid=РАБОТАЕТ');
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

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// }).catch((err) => console.error(err));

