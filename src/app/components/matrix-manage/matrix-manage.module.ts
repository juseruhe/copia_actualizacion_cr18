import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';

/* Components */
import { MatrixManageComponent } from './matrix-manage/matrix-manage.component';

/* Configurations */
import { MATRIX_MANAGE_CONFIG } from './config/config.provider';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MatrixManageComponent
  ],
  imports: [
    CommonModule,
    CrudModalModule,
    NgbCollapseModule
  ],
  exports: [
    MatrixManageComponent
  ],
  providers: [
    ...MATRIX_MANAGE_CONFIG
  ]
})
export class MatrixManageModule { }
