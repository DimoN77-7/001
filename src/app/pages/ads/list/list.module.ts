import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {NewComponent} from "./new/new.component";
// import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [ListComponent],
  // declarations: [ListComponent, NewComponent, PopularComponent],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
