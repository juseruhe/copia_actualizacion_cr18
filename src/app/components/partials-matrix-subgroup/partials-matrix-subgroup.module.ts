import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixSubgroupApiService } from './services/matrix-subgroup-api.service';

/* Components */
import { MatrixSubgroupManageComponent } from './matrix-subgroup-manage/matrix-subgroup-manage.component';

@NgModule({
  declarations: [MatrixSubgroupManageComponent],
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
      useClass: MatrixSubgroupApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixSubgroupManageComponent,
        editClass: MatrixSubgroupManageComponent,
        name: 'Subgrupo'
      }
    },
    {
      provide: 'REDIRECTION_CONFIG',
      useValue: {
        backPath: '/matrix/',
        nextPath: '/matrix-dimension/'
      }
    }
  ],
  exports: [MatrixSubgroupManageComponent]
})
export class PartialsMatrixSubgroupModule { }
