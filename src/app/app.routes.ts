import { Routes } from '@angular/router';
import { AppContainerComponent } from './container/app-container/app-container.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppContainerComponent
      },
      {
        path: 'favs',
        loadChildren: () => import('./modules/user-favs/user-favs.module').then(m => m.UserFavsModule)
      }
    ]
  },
];
