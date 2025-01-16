import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllMatrixGroupResolverService } from '@resolver/all-matrix-group/all-matrix-group.service';

/* Components */
import { MatrixComponent } from './matrix.component';

const routes: Routes = [
  {
    path: 'matrix',
    component: MatrixComponent,
    data: {
      title: 'Ruta BIM',
      urls: [
        { title: 'Dashboard', url: '/' },
        { title: 'Grupos' }
      ]
    },
    resolve: {
      recordList: AllMatrixGroupResolverService
    }
  },
  {
    path: 'matrix-subgroup/:matrixGroupId',
    loadChildren: () => import('./matrix-subgroup/matrix-subgroup.module').then(m => m.MatrixSubgroupModule)
  },
  {
    path: 'matrix-dimension/:matrixSubgroupId',
    loadChildren: () => import('./matrix-dimension/matrix-dimension.module').then(m => m.MatrixDimensionModule)
  },
  {
    path: 'matrix-topic/:matrixDimensionId',
    loadChildren: () => import('./matrix-topic/matrix-topic.module').then(m => m.MatrixTopicModule)
  },
  {
    path: 'matrix-category',
    loadChildren: () => import('./matrix-category/matrix-category.module').then(m => m.MatrixCategoryModule)
  },
  {
    path: 'matrix-question/:matrixTopicId',
    loadChildren: () => import('./matrix-question/matrix-question.module').then(m => m.MatrixQuestionModule)
  },
  {
    path: 'matrix-preview',
    loadChildren: () => import('./matrix-preview/matrix-preview.module').then(m => m.MatrixPreviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixRoutingModule { }
