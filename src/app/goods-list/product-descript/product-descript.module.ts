import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescriptRoutingModule } from './product-descript-routing.module';
import {ProductDescriptComponent} from "./product-descript.component";


@NgModule({
  declarations: [ProductDescriptComponent],
  imports: [
    CommonModule,
    ProductDescriptRoutingModule
  ]
})
export class ProductDescriptModule { }
