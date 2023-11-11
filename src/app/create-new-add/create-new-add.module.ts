import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewAddRoutingModule } from './create-new-add-routing.module';
import {CreateNewAddComponent} from "./create-new-add.component";


@NgModule({
  declarations: [CreateNewAddComponent],
  imports: [
    CommonModule,
    CreateNewAddRoutingModule
  ]
})
export class CreateNewAddModule { }
