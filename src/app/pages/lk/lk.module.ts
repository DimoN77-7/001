import { NgModule } from "@angular/core";
import  { CommonModule } from "@angular/common";

import { LkRoutingModule } from './lk-routing.module';
import { LkComponent } from './lk.component';
// import { NewComponent } from './new/new.component';

@NgModule({
  declarations:[LkComponent],
  // declarations: [LkComponent, NewComponent],
  imports: [CommonModule, LkRoutingModule],
})
export class LkModule { };
