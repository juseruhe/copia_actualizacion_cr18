import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Guards */
import { VerifyGuard } from '@guard/verify/verify.guard';
import { ExistKnowledgeGuard } from '@guard/exist-knowledge/exist-knowledge.guard';
import { RoleAccessGuard } from '@guard/role-access/role-access.guard';
import { HasRecordingGuard } from '@guard/has-recording/has-recording.guard';

/* Components */
import { FullComponent } from '@layout/full/full.component';

/* Enums */
import { ERole } from '@enum/role.enum';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: '',
        children: [
      
          {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module')
              .then(m => m.ProfileModule),
            data: {
              title: 'Datos de perfil',
              urls: [
                { title: 'Datos de perfil' }
              ]
            },
          },
          {
            path: 'maturity-matrix',
            loadChildren: () => import('./maturity-matrix/maturity-matrix.module')
              .then(m => m.MaturityMatrixModule),
          /*  data: {
              title: 'Evaluación de implementación BIM',
              urls: [
                { title: 'Evaluación de implementación BIM' }
              ]
            },*/
          },
          {
            path: 'instructive',
            loadChildren: () => import('./instructive/instructive.module')
              .then(m => m.InstructiveModule),
            data: {
              title: 'Antes de empezar',
              urls: [
                { title: 'Antes de empezar' }
              ]
            },
          },
          {
            path: 'road-map',
            loadChildren: () => import('./road-map/road-map.module').then(m => m.RoadMapModule),
            data: {
              
              urls: [
                { title: 'Mapa de ruta' }
              ]
            }
          },
          {
            path: 'where-are-you',
            loadChildren: () => import('./where-are-your-company/where-are-your-company.module').then(m => m.WhereAreYourCompanyModule),
            data: {
              title: 'Donde estoy respecto a BIM',
              urls: [
                { title: 'Donde estoy respecto a BIM' }
              ],
              inside: true
            }
          },
          {
            path: 'bim-presentation',
            loadChildren: () => import('./bim-presentation/bim-presentation.module').then(m => m.BimPresentationModule),
            data: {
              title: '¿Qué es la Ruta BIM?',
              urls: [
                { title: '¿Qué es la Ruta BIM?' }
              ]
            }
          },
        ],
        data: {
          roleId: [ERole.USER],
        },
        canActivate: [
          RoleAccessGuard
        ]
      },
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [
          RoleAccessGuard
        ],
        data: {
          roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY, 343]
        }
      }
    ],
    canActivate: [
      VerifyGuard,
      ExistKnowledgeGuard,
      HasRecordingGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
