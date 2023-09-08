import { Component, Input } from '@angular/core';
import {Daum} from "./product.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // template: '<p>product works!</p>',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Daum

}
