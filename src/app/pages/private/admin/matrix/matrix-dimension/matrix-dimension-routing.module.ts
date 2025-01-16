import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMatrixDimensionTypeResolverService } from '@resolver/all-matrix-dimension-type/all-matrix-dimension-type.service';

/* Resolvers */
import { AllMatrixDimensionResolverService } from '@resolver/all-matrix-dimension/all-matrix-dimension.service';
import { OneMatrixSubgroupResolverService } from '@resolver/one-matrix-subgroup/one-matrix-subgroup.service';

/* Components */
import { MatrixDimensionComponent } from './matrix-dimension.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixDimensionComponent,
    data: {
      title: 'Ruta BIM - Dimensiones',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Dimensiones' }
      ]
    },
    resolve: {
      parent: OneMatrixSubgroupResolverService,
      recordList: AllMatrixDimensionResolverService,
      typeList: AllMatrixDimensionTypeResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixDimensionRoutingModule { }
