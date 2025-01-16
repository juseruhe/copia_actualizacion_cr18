import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixDimensionRoutingModule } from './matrix-dimension-routing.module';
import { PartialsMatrixDimensionModule } from '@component/partials-matrix-dimension/partials-matrix-dimension.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';

/* Components */
import { MatrixDimensionComponent } from './matrix-dimension.component';

@NgModule({
  declarations: [MatrixDimensionComponent],
  imports: [
    CommonModule,
    MatrixDimensionRoutingModule,
    MatrixManageModule,
    PartialsMatrixDimensionModule
  ],
  providers: []
})
export class MatrixDimensionModule { }
