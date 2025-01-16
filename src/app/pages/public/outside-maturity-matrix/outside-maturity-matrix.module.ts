import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { OutsideMaturityMatrixRoutingModule } from './outside-maturity-matrix-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { OutsideMaturityMatrixComponent } from './outside-maturity-matrix.component';

@NgModule({
  declarations: [OutsideMaturityMatrixComponent],
  imports: [
    CommonModule,
    OutsideMaturityMatrixRoutingModule,
    SharedModule
  ]
})
export class OutsideMaturityMatrixModule { }
