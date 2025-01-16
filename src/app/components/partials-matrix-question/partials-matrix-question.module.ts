import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixQuestionApiService } from './services/matrix-question-api.service';

/* Components */
import { MatrixQuestionManageComponent } from './matrix-question-manage/matrix-question-manage.component';

@NgModule({
  declarations: [MatrixQuestionManageComponent],
  imports: [
    CommonModule,
    CrudModalModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: ApiManageService,
      useClass: MatrixQuestionApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixQuestionManageComponent,
        editClass: MatrixQuestionManageComponent,
        name: 'Pregunta'
      }
    },
    {
      provide: 'REDIRECTION_CONFIG',
      useValue: {
        backPath: '/matrix-topic/',
        backPathRelation: true
      }
    }
  ],
  exports: [MatrixQuestionManageComponent]
})
export class PartialsMatrixQuestionModule { }
