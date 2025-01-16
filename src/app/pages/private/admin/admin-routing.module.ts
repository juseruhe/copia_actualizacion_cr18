import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Enums */
import { ERole } from '@enum/role.enum';

/* Guards */
import { RoleAccessGuard } from '@guard/role-access/role-access.guard';

const routes: Routes = [
  {
    path: 'admin-profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then(m => m.AdminProfileModule),
    data: {
      title: 'Datos de perfil',
      urls: [
        { title: 'Datos de perfil' }
      ]
    },
  },
  {
    path: 'admin-user',
    loadChildren: () => import('./admin-user/admin-user.module').then(m => m.AdminUserModule),
    canLoad: [
      RoleAccessGuard
    ],
    data: {
      title: 'Usuarios de administración',
      urls: [
        { title: 'Usuarios de administración' }
      ],
      roleId: [ERole.SUPERADMIN]
    },
  },
  {
    path: 'admin-client',
    loadChildren: () => import('./admin-client/admin-client.module').then(m => m.AdminClientModule),
    canLoad: [
      RoleAccessGuard
    ],
    data: {
      title: 'Empresas y personas',
      urls: [
        { title: 'Empresas y personas' }
      ],
      roleId: [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY]
    },
  },
  {
    path: '',
    loadChildren: () => import('./matrix/matrix.module').then(m => m.MatrixModule),
  },
  {
    path: 'admin-download',
    loadChildren: () => import('./admin-download/admin-download.module').then(m => m.AdminDownloadModule),
    data: {
      title: 'Descargar bases',
      urls: [
        { title: 'Descargar bases' }
      ]
    },
  },
  {
    path: 'admin-result-period',
    loadChildren: () => import('./admin-result-by-period/admin-result-by-period.module').then(m => m.AdminResultByPeriodModule),
    data: {
      title: 'Resultado por período',
      urls: [
        { title: 'Resultado por período' }
      ]
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
