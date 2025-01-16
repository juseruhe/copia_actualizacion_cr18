import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AdminClientComponent } from './admin-client.component';

const routes: Routes = [
  {
    path: '',
    component: AdminClientComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import('./admin-person/admin-person.module').then(m => m.AdminPersonModule),
        data: {},
      },
      {
        path: '',
        loadChildren: () => import('./admin-company/admin-company.module').then(m => m.AdminCompanyModule),
        data: {},
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminClientRoutingModule { }
