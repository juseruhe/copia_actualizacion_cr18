import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MaturityMatrixRoutingModule } from './maturity-matrix-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartialsMaturityMatrixModule } from '@component/partials-maturity-matrix/partials-maturity-matrix.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { MaturityMatrixComponent } from './maturity-matrix.component';

@NgModule({
  declarations: [MaturityMatrixComponent],
  imports: [
    CommonModule,
    MaturityMatrixRoutingModule,
    SharedModule,
    PartialsMaturityMatrixModule,
    NgbProgressbarModule
  ]
})
export class MaturityMatrixModule { }
