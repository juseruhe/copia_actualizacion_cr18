import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { InstructiveComponent } from './instructive.component';

const routes: Routes = [
  {
    path: '',
    component: InstructiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructiveRoutingModule { }
