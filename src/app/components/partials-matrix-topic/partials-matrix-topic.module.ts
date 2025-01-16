import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixTopicApiService } from './services/matrix-topic-api.service';

/* Components */
import { MatrixTopicManageComponent } from './matrix-topic-manage/matrix-topic-manage.component';

@NgModule({
  declarations: [MatrixTopicManageComponent],
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
      useClass: MatrixTopicApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixTopicManageComponent,
        editClass: MatrixTopicManageComponent,
        name: 'Tema a tratar'
      }
    },
    {
      provide: 'REDIRECTION_CONFIG',
      useValue: {
        backPath: '/matrix-dimension/',
        backPathRelation: true,
        nextPath: '/matrix-question/'
      }
    }
  ],
  exports: [MatrixTopicManageComponent]
})
export class PartialsMatrixTopicModule { }
