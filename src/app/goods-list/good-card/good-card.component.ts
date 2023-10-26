import {Component, Input, OnInit} from '@angular/core';
import {API_BASE} from "../../../main";
import {Advert} from "../../service/swagger-service.inerface";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-good-card',
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.scss']
})
export class GoodCardComponent  implements OnInit{
  @Input()advert: Advert;

// adverts:any;



  constructor(private router: Router, private route: ActivatedRoute) {

  }

  redirectToProductDetails(id: number) {
    this.router.navigate(['/good-descrip', id]);
    console.log(ActivatedRoute);
  }
// this.images = this.advert.imagesIds.map(id => imageSrcCreator(id));
imageSrcCreator(id:string) : string {
    if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
    let src = `${API_BASE}/images/${id}`;
    return src
  console.log(src)
  }
  ngOnInit() {
    this.link =`good-descript${this.advert.id}`
  }

  }

