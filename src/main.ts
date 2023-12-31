import { bootstrapApplication} from "@angular/platform-browser";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/app.module";
import {AppComponent} from "./app/app.component";
import {ActivatedRouteSnapshot, provideRouter, RouterStateSnapshot, Routes} from "@angular/router";
import {AuthGuard} from "./app/auth.guard";
import { UserService } from './app/user.service';
import {inject} from "@angular/core";
import {RegisterComponent} from "./app/pages/register/register.component";
import {HeaderComponent} from "./app/layout/header/header.component";
import {map, timer} from "rxjs";
// import {window} from "rxjs";



export const API_BASE = 'http://194.87.237.48:5000';

// const routes: Routes = [
//   {
//     path: '',
//     title: 'Главная',
//     children: [
//       {
//         path: '',
//         loadComponent: () =>
//           import('./app/pages/main/main.component').then(
//             (c) => c.MainComponent
//           ),
//       },
//       {
//         path: 'register',
//         canActivate: [
//           () => false,
//           () =>
//             timer(2000).pipe(
//               map(() => {
//                 debugger;
//                 return true;
//               })
//             ),
//         ],
//         canDeactivate: [
//           (component: RegisterComponent) => {
//             if (component.form.dirty) {
//               return window.confirm('Вы уверены?');
//             } else {
//               return true;
//             }
//           },
//         ],
//         loadComponent: () =>
//           import('./app/pages/register/register.component').then(
//             (c) => c.RegisterComponent
//           ),
//       },
//       {
//         path: 'lk',
//         title: 'Личный кабинет',
//         canActivate: [
//           (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
//             inject(UserService).isLoggined(),
//         ],
//         loadComponent: () =>
//           import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
//       },
//       {
//         path: 'user/:id',
//         title: 'Юзер',
//         resolve: {
//           breadcrumbsLabel: (route: ActivatedRouteSnapshot) =>
//             'Игорь ' + route.paramMap.get('id'),
//         },
//         loadComponent: () =>
//           import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
//       },
//       {
//         path: 'ads',
//         title: 'Объявления',
//         children: [{
//           path: '',
//           canActivateChild: [AuthGuard],
//           loadComponent: () =>
//             import('./app/pages/ads/list/list.component').then(
//               (c) => c.ListComponent
//             ),
//           children: [
//             {
//               path: 'new',
//               title: 'Новые',
//               loadComponent: () =>
//                 import('./app/pages/ads/list/new/new.component').then(
//                   (c) => c.NewComponent
//                 ),
//             },
//             {
//               path: 'popular',
//               title: 'Популярные',
//               loadComponent: () =>
//                 import('./app/pages/ads/list/popular/popular.component').then(
//                   (c) => c.PopularComponent
//                 ),
//             },
//           ],
//         },
//         ],
//       },
//     ],
//   },


  // {
  //
  //   path: '',
  //   title: 'Главная',
  //   children: [
  //     {
  //       path: '',
  //       loadComponent: () =>  import('./app/pages/main/main.component').then(
  //         (c) => c.MainComponent),
  //     },
  //     {
  //       path: '',
  //       loadComponent: () =>  import('./app/layout/header/header.component').then(
  //         (c) => c.HeaderComponent),
  //     },
  //     {
  //       path: 'register',
  //       // canActivate: [
  //       //   () => false,
  //       //   () =>
  //       //     timer(2000).pipe(
  //       //       map(() => {
  //       //         debugger;
  //       //         return true;
  //       //       })
  //       //     ),
  //       // ],
  //       canDeactivate: [
  //         (component: RegisterComponent) => {
  //           if (component.form.dirty) {
  //             return window.confirm('Вы уверены?');
  //           } else {
  //             return true;
  //           }
  //         },
  //       ],
  //       loadComponent: () =>
  //         import('./app/pages/register/register.component').then(
  //           (c) => c.RegisterComponent
  //         ),
  //     },
  //
  //     {
  //       path: 'lk',
  //       title: 'Личный кабинет',
  //       // canActivate:[AuthGuard],
  //       canActivate: [
  //         (route: ActivatedRouteSnapshot,
  //          state: RouterStateSnapshot) =>
  //                   inject(UserService).isLoggined(),
  //               ],
  //       loadComponent: () =>  import('./app/pages/lk/lk.component').then(
  //         (c) => c.LkComponent),
  //     },
  //     {
  //           path: 'user/:id',
  //           title: 'Юзер',
  //           resolve: {
  //             breadcrumbsLabel: (route: ActivatedRouteSnapshot) =>
  //               'Дмитрий' + route.paramMap.get('id'),
  //           },
  //           loadComponent: () =>
  //             import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
  //         },
  //     {
  //       path: 'ads',
  //       title: 'Обьявления',
  //       children: [
  //         // {
  //         //   path: ':id',
  //         //   title: 'Карточка',
  //         //   children: [
  //         //     {
  //         //       path: '',
  //         //       loadComponent: () =>  import('./app/pages/ads/card/card.component').then(
  //         //         (c) => c.CardComponent),
  //         //     },
  //         //   ]
  //         //   // loadComponent: () =>  import('./app/pages/ads/list/list.component').then(
  //         //   //   (c) => c.ListComponent),
  //         // },
  //         {
  //           path: '',
  //           canActivateChild: [AuthGuard],
  //           loadComponent: () =>
  //             import('./app/pages/ads/list/list.component').then(
  //               (c) => c.ListComponent
  //             ),
  //           children: [
  //             {
  //               path: 'new',
  //               title: 'Новые',
  //               loadComponent: () =>
  //                 import('./app/pages/ads/list/new/new.component').then(
  //                   (c) => c.NewComponent
  //                 ),
  //             },
  //             {
  //               path: 'popular',
  //               title: 'Популярные',
  //               loadComponent: () =>
  //                 import('./app/pages/ads/list/popular/popular.component').then(
  //                   (c) => c.PopularComponent
  //                 ),
  //             },
  //           ],
  //         },
  //
  //       ],
  //     },
  //   ]
  // }

// ]
// import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent, {
//  providers: []
// })
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));






// import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app/app.component';
// import {
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Routes,
//   provideRouter,
// } from '@angular/router';
// import { AuthGuard } from './app/auth.guard';
// import { inject } from '@angular/core';
// import { UserService } from './app/user.service';
// import { RegisterComponent } from './app/pages/register/register.component';
// import { map, timer } from 'rxjs';
//
// const routes: Routes = [
//   {
//     path: '',
//     title: 'Главная',
//     children: [
//       {
//         path: '',
//         loadComponent: () =>
//           import('./app/pages/main/main.component').then(
//             (c) => c.MainComponent
//           ),
//       },
//       {
//         path: 'register',
//         canActivate: [
//           () => false,
//           () =>
//             timer(2000).pipe(
//               map(() => {
//                 debugger;
//                 return true;
//               })
//             ),
//         ],
//         canDeactivate: [
//           (component: RegisterComponent) => {
//             if (component.form.dirty) {
//               return window.confirm('Вы уверены?');
//             } else {
//               return true;
//             }
//           },
//         ],
//         loadComponent: () =>
//           import('./app/pages/register/register.component').then(
//             (c) => c.RegisterComponent
//           ),
//       },
//       {
//         path: 'lk',
//         title: 'Личный кабинет',
//         canActivate: [
//           (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
//             inject(UserService).isLoggined(),
//         ],
//         loadComponent: () =>
//           import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
//       },
//       {
//         path: 'user/:id',
//         title: 'Юзер',
//         resolve: {
//           breadcrumbsLabel: (route: ActivatedRouteSnapshot) =>
//             'Игорь ' + route.paramMap.get('id'),
//         },
//         loadComponent: () =>
//           import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
//       },
//       {
//         path: 'ads',
//         title: 'Объявления',
//         children: [
//           // {
//           //   path: ':id',
//           //   title: 'Карточка',
//           //   children: [
//           //     {
//           //       path: '',
//           //       loadComponent: () =>
//           //         import('./app/pages/ads/card/card.component').then(
//           //           (c) => c.CardComponent
//           //         ),
//           //     },
//           //     {
//           //       path: ':id',
//           //       title: 'Гуид',
//           //       loadComponent: () =>
//           //         import('./app/pages/ads/card-edit/card-edit.component').then(
//           //           (c) => c.CardEditComponent
//           //         ),
//           //     },
//           //   ],
//           // },
//           {
//             path: '',
//             canActivateChild: [AuthGuard],
//             loadComponent: () =>
//               import('./app/pages/ads/list/list.component').then(
//                 (c) => c.ListComponent
//               ),
//             children: [
//               {
//                 path: 'new',
//                 title: 'Новые',
//                 loadComponent: () =>
//                   import('./app/pages/ads/list/new/new.component').then(
//                     (c) => c.NewComponent
//                   ),
//               },
//               {
//                 path: 'popular',
//                 title: 'Популярные',
//                 loadComponent: () =>
//                   import('./app/pages/ads/list/popular/popular.component').then(
//                     (c) => c.PopularComponent
//                   ),
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// }).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [],
// }).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
/* При переходе на систему standAlone , в main.ts убираем AppModule,
*  и вместо platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  * вставляем  // bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// }).catch((err) => console.error(err));
* LoadChildren -> LoadComponent
*  */
