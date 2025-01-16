import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { MaturityMatrixComponent } from './maturity-matrix.component';

const routes: Routes = [
  {
    path: '',
    component: MaturityMatrixComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaturityMatrixRoutingModule { }
