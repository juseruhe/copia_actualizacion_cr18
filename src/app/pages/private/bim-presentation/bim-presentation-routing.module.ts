import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { BimPresentationComponent } from './bim-presentation.component';

const routes: Routes = [
  {
    path: '',
    component: BimPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimPresentationRoutingModule { }
