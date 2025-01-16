import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllMatrixQuestionResolverService } from '@resolver/all-matrix-question/all-matrix-question.service';
import { OneMatrixTopicResolverService } from '@resolver/one-matrix-topic/one-matrix-topic.service';

/* Components */
import { MatrixQuestionComponent } from './matrix-question.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixQuestionComponent,
    data: {
      title: 'Ruta BIM - Preguntas',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Preguntas' }
      ]
    },
    resolve: {
      parent: OneMatrixTopicResolverService,
      recordList: AllMatrixQuestionResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixQuestionRoutingModule { }
