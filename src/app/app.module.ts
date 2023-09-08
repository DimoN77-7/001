import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule} from "@angular/common/http";
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CompanyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
