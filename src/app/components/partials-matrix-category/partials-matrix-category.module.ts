import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { MatrixCategoryApiService } from './services/matrix-category-api.service';

/* Components */
import { MatrixCategoryManageComponent } from './matrix-category-manage/matrix-category-manage.component';

@NgModule({
  declarations: [MatrixCategoryManageComponent],
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
      useClass: MatrixCategoryApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: MatrixCategoryManageComponent,
        editClass: MatrixCategoryManageComponent,
        name: 'Categoría'
      }
    }
  ],
  exports: [MatrixCategoryManageComponent]
})
export class PartialsMatrixCategoryModule { }
