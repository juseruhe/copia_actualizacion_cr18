import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

/* Modules */
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';
import { CustomPipesModule } from '@pipe/custom-pipes.module';

/* Services */
import { ApiCrudManageService } from './services/api-crud-manage.service';

/* Components */
import { CreateEditModalComponent } from './create-edit-modal/create-edit-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ApiManageService } from './services/api-manage.service';

@NgModule({
  declarations: [
    CreateEditModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModalModule,
    CustomPipesModule,
    NgbModalModule
  ],
  exports: [
    CreateEditModalComponent,
    DeleteModalComponent
  ],
  providers: [
    ApiCrudManageService,
    ApiManageService
  ]
})
export class CrudModalModule { }
