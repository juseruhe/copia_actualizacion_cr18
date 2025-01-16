import { Routes } from '@angular/router';

import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

export const Approutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
    canLoad: [
      LoginExistGuard
    ],
    canActivate: [
      LoginExistGuard
    ],
    data: {
      caseLoginExist: 1
    }
  },
  {
    path: '**',
    redirectTo: '/landing'
  }
];
