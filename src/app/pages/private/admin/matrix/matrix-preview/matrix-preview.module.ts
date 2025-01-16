import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixPreviewRoutingModule } from './matrix-preview-routing.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartialsMaturityMatrixModule } from '@component/partials-maturity-matrix/partials-maturity-matrix.module';

/* Components */
import { MatrixPreviewComponent } from './matrix-preview.component';

@NgModule({
  declarations: [MatrixPreviewComponent],
  imports: [
    CommonModule,
    MatrixPreviewRoutingModule,
    SharedModule,
    PartialsMaturityMatrixModule,
    NgbProgressbarModule
  ]
})
export class MatrixPreviewModule { }
