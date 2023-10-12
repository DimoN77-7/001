import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LkComponent } from './pages/lk/lk.component';
import {AuthGuard} from "./auth.guard";
import {UserService} from "./user.service";

const routes: Routes = [
  // {
  //   path: '',
  //   title: 'Главная',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/main/main.module').then(
  //           (c) => c.MainModule),
  //     },
  //     // {
  //     //   path: 'register',
  //     //   canActivate: [
  //     //     () => false,
  //     //     () =>
  //     //       timer(2000).pipe(
  //     //         map(() => {
  //     //           debugger;
  //     //           return true;
  //     //         })
  //     //       ),
  //     //   ],
  //     //   canDeactivate: [
  //     //     (component: RegisterComponent) => {
  //     //       if (component.form.dirty) {
  //     //         return window.confirm('Вы уверены?');
  //     //       } else {
  //     //         return true;
  //     //       }
  //     //     },
  //     //   ],
  //     //   loadComponent: () =>
  //     //     import('./app/pages/register/register.component').then(
  //     //       (c) => c.RegisterComponent
  //     //     ),
  //     // },
  //     {
  //       path: 'lk',
  //       title: 'Личный кабинет',
  //       canActivate: [
  //         (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  //           inject(UserService).isLoggined(),
  //       ],
  //       loadChildren: () =>
  //         import('./pages/lk/lk.module').then((c) => c.LkModule),
  //     },
  //     {
  //       path: 'user/:id',
  //       title: 'Юзер',
  //       resolve: {
  //         breadcrumbsLabel: (route: ActivatedRouteSnapshot) =>
  //           'Дмитрий' + route.paramMap.get('id'),
  //       },
  //       loadChildren: () =>
  //         import('./pages/lk/lk.module').then((c) => c.LkModule),
  //     },
  //     {
  //       path: 'ads',
  //       title: 'Объявления',
  //       children: [
  //
  //         {
  //           path: '',
  //           canActivateChild: [AuthGuard],
  //           loadChildren: () =>
  //             import('./pages/ads/list/list.module').then(
  //               (c) => c.ListModule),
  //           children: [
  //             {
  //               path: 'new',
  //               title: 'Новые',
  //               loadChildren: () =>
  //                 import('./pages/ads/list/new/new.component').then(
  //                   (c) => c.NewComponent),
  //             },
  //             {
  //               path: 'popular',
  //               title: 'Популярные',
  //               loadChildren: () =>
  //                 import('./pages/ads/list/popular/popular.component').then(
  //                   (c) => c.PopularComponent),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },



  {
    path: '',
    title: 'Главная',
    // redirectTo: 'main',
    /*pathMatch нужен для указания соответсвия маршрута */
    // pathMatch: 'full',
  // pathMatch: 'prefix',
  // },
    children: [
  {
     path: '',
    // path: 'main',
    // title: 'Главная',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
    /*StandAlone loadChildren -> loadComponent и MainModule ->MainComponent */
  },
      // {
      //   path: 'register',
      //   canActivate: [
      //     () => false,
      //     () =>
      //       timer(2000).pipe(
      //         map(() => {
      //           debugger;
      //           return true;
      //         })
      //       ),
      //   ],
      //   canDeactivate: [
      //     (component: RegisterComponent) => {
      //       if (component.form.dirty) {
      //         return window.confirm('Вы уверены?');
      //       } else {
      //         return true;
      //       }
      //     },
      //   ],
      //   loadComponent: () =>
      //     import('./app/pages/register/register.component').then(
      //       (c) => c.RegisterComponent
      //     ),
      // },

      {
    path: 'lk',
        title: 'Личный кабинет',
        canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
          inject(UserService).isLoggined(),],
    // canMatch: [() => false],
    loadChildren: () =>
      import('./pages/lk/lk.module').then((m) => m.LkModule),
  },
  {
    path: 'ads',
    title: 'Обьявления',
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        loadComponent: () => import('./pages/ads/list/list.component').then(
          (m) => m.ListComponent),
        children: [
          {
            path: 'new',
            title: 'Новые',
            loadComponent: () =>
              import('./pages/ads/list/new/new.component').then(
                (c) => c.NewComponent),
          },
          {
            path: 'popular',
            title: 'Популярные',
            loadComponent: () =>
              import('./pages/ads/list/popular/popular.component').then(
                (c) => c.PopularComponent),
          },
        ],
        // children: [
        //   {
        //     path: 'new',
        //     title: 'Новые',
        //     loadChildren: () =>
        //       import('./pages/ads/list/new/new.component').then(
        //         (c) => c.NewComponent),
        //   },
        //   {
        //     path: 'popular',
        //     title: 'Популярные',
        //     loadChildren: () =>
        //       import('./pages/ads/list/popular/popular.component').then(
        //         (c) => c.PopularComponent),
        //   },
        // ],
      },
  // {
  //   path: 'new',
  //   title: 'Новые',
  //   loadChildren: () =>
  //     import('./pages/ads/list/new/new.component').then(
  //       (c) => c.NewComponent),
  // },
  // {
  //   path: 'popular',
  //   title: 'Популярные',
  //   loadChildren: () =>
  //     import('./pages/ads/list/popular/popular.component').then(
  //       (c) => c.PopularComponent),
  // },
],
      // {
      //   path: ':id',
      //   title: 'Карточка',
      //   loadChildren: () =>
      //     import('./pages/ads/card/card.module').then((m) => m.CardModule),
      //   // data: { description: 'Карточка чего-то там',},
      // }
},
    ],
  },
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
