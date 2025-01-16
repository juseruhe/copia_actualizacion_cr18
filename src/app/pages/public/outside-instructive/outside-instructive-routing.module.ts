import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { OutsideInstructiveComponent } from './outside-instructive.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideInstructiveComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../private/instructive/instructive.module').then(m => m.InstructiveModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideInstructiveRoutingModule { }
