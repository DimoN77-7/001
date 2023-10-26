import {Component, OnInit} from '@angular/core';
import {Advert} from "../service/swagger-service.inerface";
import {API_BASE} from "../../main";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SwaggerService} from "../service/swagger.service";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
// public goodsLists : GoodLists[]= Advert[];
  public adverts: Advert[] = [];

  constructor(private GoodsList: SwaggerService) {}

// imageSrcCreator(id:string) : string {
  //   if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
  //   let src = `${API_BASE}/images/${id}`;
  //   return src
  // }

  ngOnInit() {
    this.GoodsList
      .getAdverts()
      .subscribe((res) => (this.adverts = res));
  }
}









  // public adverts: Advert[]=[];
  //
  //
  // getAdverts(): void {
  //   const body = {
  //     search: "",
  //     showNonActive: true
  //   };
  //   this.http.post<Advert[]>(`${API_BASE}/advert/search`, body)
  //     .subscribe(res => this.adverts = res)
  // };
  //
  // constructor(private http: HttpClient, private route: Router) {
  //   this.getAdverts()
  //
  // }
  //
  // imageSrcCreator(id:string) : string {
  //   if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
  //   let src = `${API_BASE}/images/${id}`;
  //   return src
  // }
// }
