import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { WhereAreYourCompanyComponent } from './where-are-your-company.component';

const routes: Routes = [
  {
    path: '',
    component: WhereAreYourCompanyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhereAreYourCompanyRoutingModule { }
