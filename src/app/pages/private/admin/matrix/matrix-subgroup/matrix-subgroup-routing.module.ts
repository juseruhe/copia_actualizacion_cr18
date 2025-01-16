import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllMatrixSubgroupResolverService } from '@resolver/all-matrix-subgroup/all-matrix-subgroup.service';
import { OneMatrixGroupResolverService } from '@resolver/one-matrix-group/one-matrix-group.service';

/* Components */
import { MatrixSubgroupComponent } from './matrix-subgroup.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixSubgroupComponent,
    data: {
      title: 'Ruta BIM - Subgrupos',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Subgrupos' }
      ]
    },
    resolve: {
      parent: OneMatrixGroupResolverService,
      recordList: AllMatrixSubgroupResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixSubgroupRoutingModule { }
