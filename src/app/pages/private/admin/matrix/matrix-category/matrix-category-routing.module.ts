import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllMatrixCategoryResolverService } from '@resolver/all-matrix-category/all-matrix-category.service';

/* Components */
import { MatrixCategoryComponent } from './matrix-category.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixCategoryComponent,
    data: {
      title: 'Ruta BIM - Categorías',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Categorías' }
      ]
    },
    resolve: {
      recordList: AllMatrixCategoryResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixCategoryRoutingModule { }
