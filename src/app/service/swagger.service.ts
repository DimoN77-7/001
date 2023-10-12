import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Root} from "../company/company.interface";
import {Observable} from "rxjs";
import {API_BASE} from "../../main";
// import {MainComponent} from "../pages/main/main.component";
import {Advert} from "./swagger-service.inerface";


@Injectable({
  providedIn: 'root'
})

// export class SwaggerService  {
// // export class SwaggerService implements OnInit {
//   // public mainComponent!: Components[];
//   // public  swaggerService: SwaggerService;
//   // private: httpClient: HttpClient;
//   constructor(
//     private  httpClient: HttpClient,
//     private  swaggerService: SwaggerService
//   ) {}
//   // constructor(_http: HttpClient) {
//   //   this.httpClient = _http;
//   // }
//
//   // constructor( private swaggerService: SwaggerService) {
//     swaggerService(): Observable<Advert[]> {
//       const body = {
//         search: "",
//         showNonActive: true
//       };
//       return this.httpClient.post<Advert[]>(`${API_BASE}/advert/search`, body);
//       console.log(body);
//     };
//
// }
//   constructor(private httpClient: HttpClient) { }
//  ngOnInit() {
//   this.httpClient
//     .get('http://194.87.237.48:5000/Advert/{"0f439eba-d58c-42cd-86c3-4e15a486e9ec"}')
//     .subscribe((data) => {
//         console.log(data);
//       },
//       (errorResponse) => {
//         console.log(errorResponse.error.message);
//       },
//       () => {
//
//       })
//   }
// }
  // getProducts():Observable<Root> {
  //   return  this._http.get<Root>('http://194.87.237.48:5000/swagger')
// }}

// ngOnInit() {
//   this.httpClient
//     .get('http://194.87.237.48:5000/Advert/{"0f439eba-d58c-42cd-86c3-4e15a486e9ec"}')
//     .subscribe((data) => {
//         console.log(data);
//       },
//       (errorResponse) => {
//         console.log(errorResponse.error.message);
//       },
//       () => {
//
//       })
//   //make request
// }
