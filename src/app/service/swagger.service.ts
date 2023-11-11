import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Root} from "../company/company.interface";
import {Observable} from "rxjs";
import {API_BASE} from "../../main";
// import {MainComponent} from "../pages/main/main.component";
import {Advert} from "./swagger-service.inerface";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class SwaggerService  {
  // const myformData = new FormData(form);
  public adverts: Advert[]=[];
  constructor(private http: HttpClient, private route: Router) {
    this.getAdverts()
  }
    getAdverts(): Observable<Advert[]> {
      const body = {
        search: "",
        showNonActive: true
      };
       return this.http.post<Advert[]>(`${API_BASE}/advert/search`, body)
        // .subscribe(res => this.adverts = res)
    };

  getProductById(id:any): Observable<any> {
    return this.http.get<any>(`/Advert/` + id);
  }

    imageSrcCreator(id:string) : string {
      if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
      let src = `${API_BASE}/images/${id}`;
      return src
    }
  createAdvert(): Observable<any> {
    return this.http.post<any>(`${API_BASE}/Advert`, {
      method: "POST",
      body: ""
      }
      // "name",
      // description: '',
      // images: '',
      // cost: '',
      // email: '',
      // phone: '',
      // location: '',
      // categoryId: '',
    )


    }

}



//     private  swaggerService: SwaggerService
//   ) {}
//   // constructor(_http: HttpClient) {
//   //   this.httpClient = _http;
//   // }
//
//   // constructor( private swaggerService: SwaggerService) {
//
//     swaggerService(): Observable<Advert[]> {
//       const body = {
//         search: "",
//         showNonActive: true
//       };
//       return this.httpClient.post<Advert[]>(`${API_BASE}/advert/search`, body);
//       console.log(body);
//     };

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

