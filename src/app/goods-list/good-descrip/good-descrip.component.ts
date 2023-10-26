import {Component, Input, OnInit} from '@angular/core';
import {SwaggerService} from "../../service/swagger.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Advert} from "../../service/swagger-service.inerface";
import {CommonModule} from "@angular/common";
import {API_BASE} from "../../../main";

@Component({
  selector: 'app-good-descrip',
  templateUrl: './good-descrip.component.html',
  styleUrls: ['./good-descrip.component.scss'],
  imports:[CommonModule,RouterModule],
  standalone: true,
})
// export class GoodDescripComponent {
export class GoodDescripComponent implements OnInit {
  private productId = '';
  product: Advert;

  constructor(
    private route: ActivatedRoute,
    private gooddescrip: SwaggerService
  ) {
    console.log(this.productId)
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId)
    });
    this.gooddescrip
      .getProductById(this.productId)
      .subscribe((productData) => (this.product = productData));
    console.log(this.productId)

  }
  // imageSrcCreator(id:string) : string {
  //   if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
  //   let src = `${API_BASE}/images/${id}`;
  //   return src
  // }
}
