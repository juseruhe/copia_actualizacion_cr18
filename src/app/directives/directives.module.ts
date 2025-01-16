import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Directives */
import { CheckMatrixStepDirective } from './check-matrix-step.directive';

@NgModule({
  declarations: [CheckMatrixStepDirective],
  imports: [
    CommonModule
  ],
  exports: [CheckMatrixStepDirective]
})
export class DirectivesModule { }
