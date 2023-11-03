import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {GoodsListComponent} from "../../goods-list/goods-list.component";
import {GoodCardComponent} from "../../goods-list/good-card/good-card.component";


@NgModule({
  declarations: [MainComponent,GoodsListComponent,GoodCardComponent],
  imports: [CommonModule, MainRoutingModule,],
})
export class MainModule {}
