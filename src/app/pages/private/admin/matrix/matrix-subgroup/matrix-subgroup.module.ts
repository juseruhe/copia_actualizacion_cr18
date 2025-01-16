import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixSubgroupRoutingModule } from './matrix-subgroup-routing.module';
import { PartialsMatrixSubgroupModule } from '@component/partials-matrix-subgroup/partials-matrix-subgroup.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';

/* Components */
import { MatrixSubgroupComponent } from './matrix-subgroup.component';

@NgModule({
  declarations: [MatrixSubgroupComponent],
  imports: [
    CommonModule,
    MatrixSubgroupRoutingModule,
    MatrixManageModule,
    PartialsMatrixSubgroupModule
  ],
  providers: []
})
export class MatrixSubgroupModule { }
