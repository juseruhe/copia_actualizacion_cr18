import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { OutsideRoadMapComponent } from './outside-road-map.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideRoadMapComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../private/road-map/road-map.module').then(m => m.RoadMapModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideRoadMapRoutingModule { }
