import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixGroupApiService } from './services/matrix-group-api.service';

/* Components */
import { MatrixGroupManageComponent } from './matrix-group-manage/matrix-group-manage.component';

@NgModule({
  declarations: [MatrixGroupManageComponent],
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
      useClass: MatrixGroupApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixGroupManageComponent,
        editClass: MatrixGroupManageComponent,
        name: 'Grupo'
      }
    },
    {
      provide: 'REDIRECTION_CONFIG',
      useValue: {
        nextPath: '/matrix-subgroup/'
      }
    }
  ],
  exports: [MatrixGroupManageComponent]
})
export class PartialsMatrixGroupModule { }
