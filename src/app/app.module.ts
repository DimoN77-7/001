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
import { BodyComponent } from './body/body.component';
import {EmojiListComponent} from './shared/components/emoji-list/emoji-list.component'
import {ErrorInterceptor} from "./shared/error-interceptor";
import { CustomInerceptor} from "./shared/auth-interceptor";
import { BredcrumbsComponent } from './components/bredcrumbs/bredcrumbs.component';
import {FormsModule} from "@angular/forms";
import { RegWindowComponent } from './layout/header/reg-window/reg-window.component';
import {UserMenuComponent} from "./layout/header/user-menu/user-menu.component";
import {SearchInputComponent} from "./layout/header/header-bottom/search-input/search-input.component";
import {HeaderBottomComponent} from "./layout/header/header-bottom/header-bottom.component";
import {CategoriesListComponent} from "./layout/header/header-bottom/categories-list/categories-list.component";
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodCardComponent } from './goods-list/good-card/good-card.component';
import {RouterModule} from "@angular/router";
// import { GoodDescripComponent } from './goods-list/good-descrip/good-descrip.component';








@NgModule({
  declarations: [
    AppComponent,
    EmojiListComponent,
    ProductComponent,
    CompanyComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BredcrumbsComponent,
    EmojiListComponent,
    RegWindowComponent,
    UserMenuComponent,
    HeaderBottomComponent,
    SearchInputComponent,
    CategoriesListComponent,
    GoodsListComponent,
    GoodCardComponent,
    // GoodDescripComponent,
    // FormsModule,
    // ButtonModule
    // ModalComponent,
    // RegWindowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInerceptor,
      // useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
