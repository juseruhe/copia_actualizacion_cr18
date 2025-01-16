import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixDimensionApiService } from './services/matrix-dimension-api.service';

/* Components */
import { MatrixDimensionManageComponent } from './matrix-dimension-manage/matrix-dimension-manage.component';

@NgModule({
  declarations: [MatrixDimensionManageComponent],
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
      useClass: MatrixDimensionApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixDimensionManageComponent,
        editClass: MatrixDimensionManageComponent,
        name: 'Dimensión'
      }
    },
    {
      provide: 'REDIRECTION_CONFIG',
      useValue: {
        backPath: '/matrix-subgroup/',
        backPathRelation: true,
        nextPath: '/matrix-topic/'
      }
    }
  ],
  exports: [MatrixDimensionManageComponent]
})
export class PartialsMatrixDimensionModule { }
