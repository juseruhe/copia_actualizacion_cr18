import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AdminResultByPeriodComponent } from './admin-result-by-period.component';

const routes: Routes = [
  {
    path: '',
    component: AdminResultByPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminResultByPeriodRoutingModule { }
