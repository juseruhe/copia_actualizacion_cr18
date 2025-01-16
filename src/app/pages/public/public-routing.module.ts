import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { BlankComponent } from '@layout/blank/blank.component';

/* Guards */
import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

/* Enums */
import { ERole } from '@enum/role.enum';
import { RoleAccessGuard } from '@guard/role-access/role-access.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m => m.TestModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'recover-password/:token',
        loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
      },
      {
        path: 'pending-verify',
        loadChildren: () => import('./pending-verify/pending-verify.module').then(m => m.PendingVerifyModule),
      },
      {
        path: 'email-verify/:token',
        loadChildren: () => import('./email-verify/email-verify.module').then(m => m.EmailVerifyModule),
      },
      {
        path: 'encuesta-nacional',
        loadChildren: () => import('./encuesta-nacional/encuesta-nacional.module')
          .then(m => m.EncuestaNacionalModule)
      },
      {
       path: '',
       children: [
        {
          path: 'outside-where-are-you',
          loadChildren: () => import('./outside-where-are-your-company/outside-where-are-your-company-routing.module')
            .then(m => m.OutsideWhereAreYourCompanyRoutingModule),
          data: {
            title: '¿Dónde se encuentra tu empresa?',
            urls: [
              { title: '¿Dónde se encuentra tu empresa?' }
            ]
          },
        },
        {
          path: 'outside-bim-presentation',
          loadChildren: () => import('./outside-bim-presentation/outside-bim-presentation.module')
            .then(m => m.OutsideBimPresentationModule),
          data: {
            title: '¿Qué es la Ruta BIM?',
            urls: [
              { title: '¿Qué es la Ruta BIM?' }
            ]
          },
        },
        {
          path: 'outside-road-map',
          loadChildren: () => import('./outside-road-map/outside-road-map.module')
            .then(m => m.OutsideRoadMapModule),
          data: {
            title: 'Mapa de ruta',
            urls: [
              { title: 'Mapa de ruta' }
            ]
          },
        },
        {
          path: 'outside-instructive',
          loadChildren: () => import('./outside-instructive/outside-instructive.module')
            .then(m => m.OutsideInstructiveModule),
          data: {
            title: 'Antes de empezar',
            urls: [
              { title: 'Antes de empezar' }
            ]
          },
        },
        {
          path: 'outside-maturity-matrix',
          loadChildren: () => import('./outside-maturity-matrix/outside-maturity-matrix.module')
            .then(m => m.OutsideMaturityMatrixModule),
          data: {
            title: 'Evaluación de ruta BIM',
            urls: [
              { title: 'Evaluación de ruta BIM' }
            ]
          },
        },
   
       ],
       canActivate: [
        LoginExistGuard,
        RoleAccessGuard
       ],
       data: {
        roleId: [ERole.USER]
       }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
