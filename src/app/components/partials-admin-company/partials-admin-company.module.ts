import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Services */
import { AdminCompanyApiService } from './services/admin-company-api.service';
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { AdminCompanyManageComponent } from './admin-company-manage/admin-company-manage.component';

@NgModule({
  declarations: [
    AdminCompanyManageComponent
  ],
  imports: [
    CommonModule,
    CrudModalModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AdminCompanyManageComponent
  ],
  providers: [
    {
      provide: ApiManageService,
      useClass: AdminCompanyApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: AdminCompanyManageComponent,
        editClass: AdminCompanyManageComponent,
        name: 'empresa'
      }
    }
  ],
})
export class PartialsAdminCompanyModule { }
