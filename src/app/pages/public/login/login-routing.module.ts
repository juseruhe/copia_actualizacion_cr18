import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

/* Components */
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      caseLoginExist: 2
    },
    canActivate: [
      LoginExistGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
