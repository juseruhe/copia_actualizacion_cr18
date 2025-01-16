import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MatrixCategoryRoutingModule } from './matrix-category-routing.module';
import { PartialsMatrixCategoryModule } from '@component/partials-matrix-category/partials-matrix-category.module';
import { MatrixManageModule } from '@component/matrix-manage/matrix-manage.module';

/* Components */
import { MatrixCategoryComponent } from './matrix-category.component';

@NgModule({
  declarations: [MatrixCategoryComponent],
  imports: [
    CommonModule,
    MatrixCategoryRoutingModule,
    MatrixManageModule,
    PartialsMatrixCategoryModule
  ],
  providers: []
})
export class MatrixCategoryModule { }
