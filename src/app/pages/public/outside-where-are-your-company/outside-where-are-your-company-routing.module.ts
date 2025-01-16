import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { OutsideWhereAreYourCompanyComponent } from './outside-where-are-your-company.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideWhereAreYourCompanyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../../private/where-are-your-company/where-are-your-company.module').then(m => m.WhereAreYourCompanyModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideWhereAreYourCompanyRoutingModule { }
