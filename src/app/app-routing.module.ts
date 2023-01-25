import { Routes } from '@angular/router';
import { HomePage } from './home2/home.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    pathMatch: 'full'
    //loadComponent: () => import('./home2/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
