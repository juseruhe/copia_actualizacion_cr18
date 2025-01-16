import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { RecoverPasswordComponent } from './recover-password.component';

const routes: Routes = [
  {
    path: '',
    component: RecoverPasswordComponent,
    data: {
      title: 'Recuperar contraseña',
      urls: [
        { title: 'Inicio', url: '/landing' },
        { title: 'Recuperar contraseña' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordRoutingModule { }
