import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllMatrixTopicResolverService } from '@resolver/all-matrix-topic/all-matrix-topic.service';
import { OneMatrixDimensionResolverService } from '@resolver/one-matrix-dimension/one-matrix-dimension.service';

/* Components */
import { MatrixTopicComponent } from './matrix-topic.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixTopicComponent,
    data: {
      title: 'Ruta BIM - Temas a tratar',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Temas a tratar' }
      ]
    },
    resolve: {
      parent: OneMatrixDimensionResolverService,
      recordList: AllMatrixTopicResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixTopicRoutingModule { }
