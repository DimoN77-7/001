import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {Advert} from "../../service/swagger-service.inerface";
import {SwaggerService} from "../../service/swagger.service";
import {Product} from "../../shared/interfaces/product";
import {BredcrumbsComponent} from "../../components/bredcrumbs/bredcrumbs.component";
import {API_BASE} from "../../../main";

@Component({
  selector: 'app-product-descript',
  templateUrl: './product-descript.component.html',
  styleUrls: ['./product-descript.component.scss'],
  // imports: [BredcrumbsComponent],
})
export class ProductDescriptComponent  implements OnInit {
  @Input() advert:Advert;
  public link: string;
  public id: string;
  public guid: string;
  public description: string;
  private productId = '';
    // public product : any ;


  constructor(private activatedRoute: ActivatedRoute, private productDescript: SwaggerService) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
    });
    // this.productDescript
    //   .getProductById(this.productId)
    //   .subscribe((res) =>{
    //     this.advert = res ;
    //     console.log(this.advert);
    //   } )

  }

  imageSrcCreator(id:string) : string {
    if (!id) return 'https://dummyimage.com/306x240&text=No+Image';
    let src = `${API_BASE}/images/${id}`;
    return src
    console.log(src)
  }

  ngOnInit(): void {
      this.productDescript
        .getProductById(this.productId)
        .subscribe((res) =>{
          this.advert = res ;
          console.log(this.advert);
        } )


  }
}


// public link : Observable<string> = this.activatedRoute.params.pipe(
//   map((r: any) => r.id)
// );
// public id: Observable<string> = this.activatedRoute.params.pipe(
//   map((r: any) => r.id)
// );
// public guid: Observable<string> = this.activatedRoute.queryParams.pipe(
//   map((r: any) => r.guid)
// );
// public description: Observable<string> = this.activatedRoute.data.pipe(
//   map((r: any) => r.description)
// );
