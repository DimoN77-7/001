import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDescriptComponent} from "./product-descript.component";

const routes: Routes = [
  {
    path: '',
    component: ProductDescriptComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDescriptRoutingModule { }
