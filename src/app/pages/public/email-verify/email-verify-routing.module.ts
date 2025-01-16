import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { EmailVerifyComponent } from './email-verify.component';

const routes: Routes = [
  {
    path: '',
    component: EmailVerifyComponent,
    data: {
      title: 'Verificar correo electronico'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailVerifyRoutingModule { }
