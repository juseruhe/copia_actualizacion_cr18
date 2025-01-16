import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixTopicRoutingModule } from './matrix-topic-routing.module';
import { PartialsMatrixTopicModule } from '@component/partials-matrix-topic/partials-matrix-topic.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';

/* Components */
import { MatrixTopicComponent } from './matrix-topic.component';

@NgModule({
  declarations: [MatrixTopicComponent],
  imports: [
    CommonModule,
    MatrixTopicRoutingModule,
    MatrixManageModule,
    PartialsMatrixTopicModule
  ],
  providers: []
})
export class MatrixTopicModule { }
