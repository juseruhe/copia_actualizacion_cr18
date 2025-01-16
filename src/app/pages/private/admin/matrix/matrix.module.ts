import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixRoutingModule } from './matrix-routing.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';
import { PartialsMatrixGroupModule } from '@component/partials-matrix-group/partials-matrix-group.module';

/* Components */
import { MatrixComponent } from './matrix.component';

@NgModule({
  declarations: [MatrixComponent],
  imports: [
    CommonModule,
    MatrixRoutingModule,
    MatrixManageModule,
    PartialsMatrixGroupModule
  ],
  providers: []
})
export class MatrixModule { }
