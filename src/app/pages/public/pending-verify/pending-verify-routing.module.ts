import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { PendingVerifyComponent } from './pending-verify.component';

const routes: Routes = [
  {
    path: '',
    component: PendingVerifyComponent,
    data: {
      title: 'Pendiente de verificación',
      urls: [
        { title: 'Inicio', url: '/landing' },
        { title: 'Pendiente de verificación' }
      ],
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingVerifyRoutingModule { }
