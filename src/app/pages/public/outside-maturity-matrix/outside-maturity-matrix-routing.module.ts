import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutsideMaturityMatrixComponent } from './outside-maturity-matrix.component';


const routes: Routes = [
  {
    path: '',
    component: OutsideMaturityMatrixComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../private/maturity-matrix/maturity-matrix.module')
            .then(m => m.MaturityMatrixModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideMaturityMatrixRoutingModule { }
