import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
// import {HttpInterceptor, HttpClientModule} from "@angular/common/http";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CompanyComponent } from './company/company.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// import { MainComponent } from './pages/main/main.component';
import { BodyComponent } from './body/body.component';
import {EmojiListComponent} from './shared/components/emoji-list/emoji-list.component'
import {ErrorInterceptor} from "./shared/error-interceptor";
import {AuthInterceptor} from "./shared/auth-interceptor";
import { BredcrumbsComponent } from './components/bredcrumbs/bredcrumbs.component';
import {NewComponent} from "./pages/ads/list/new/new.component";
import {PopularComponent} from "./pages/ads/list/popular/popular.component";
import {ListComponent} from "./pages/ads/list/list.component";
// import {CardComponent} from "./pages/ads/card/card.component";



@NgModule({
  declarations: [
    AppComponent,
    EmojiListComponent,
    ProductComponent,
    CompanyComponent,
    HeaderComponent,
    FooterComponent,
    // MainComponent,
    BodyComponent,
    BredcrumbsComponent,
    EmojiListComponent,
    ListComponent,
    // NewComponent,
    // PopularComponent,
    // CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
