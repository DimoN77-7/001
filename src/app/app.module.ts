// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';
// // import {HttpInterceptor, HttpClientModule} from "@angular/common/http";
// import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from "@angular/common/http";
// import { CompanyComponent } from './company/company.component';
// import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './layout/footer/footer.component';
// // import { MainComponent } from './main/main.component';
// import { BodyComponent } from './body/body.component';
// import {EmojiListComponent} from './shared/components/emoji-list/emoji-list.component'
// import {ErrorInterceptor} from "./shared/error-interceptor";
// import {AuthInterceptor} from "./shared/auth-interceptor";
// // import { BredcrumbsComponent } from './components/bredcrumbs/bredcrumbs.component';
//
//
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     EmojiListComponent,
//     ProductComponent,
//     CompanyComponent,
//     HeaderComponent,
//     FooterComponent,
//     // MainComponent,
//     BodyComponent,
//     // BredcrumbsComponent,
//
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule
//   ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: ErrorInterceptor,
//       multi: true
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true
//     }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
