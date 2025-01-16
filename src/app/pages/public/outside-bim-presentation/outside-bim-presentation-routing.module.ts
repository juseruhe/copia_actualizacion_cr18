import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { OutsideBimPresentationComponent } from './outside-bim-presentation.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideBimPresentationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../private/bim-presentation/bim-presentation.module')
            .then(m => m.BimPresentationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideBimPresentationRoutingModule { }
