import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixQuestionRoutingModule } from './matrix-question-routing.module';
import { PartialsMatrixQuestionModule } from '@component/partials-matrix-question/partials-matrix-question.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';

/* Components */
import { MatrixQuestionComponent } from './matrix-question.component';

@NgModule({
  declarations: [MatrixQuestionComponent],
  imports: [
    CommonModule,
    MatrixQuestionRoutingModule,
    MatrixManageModule,
    PartialsMatrixQuestionModule
  ],
  providers: []
})
export class MatrixQuestionModule { }
