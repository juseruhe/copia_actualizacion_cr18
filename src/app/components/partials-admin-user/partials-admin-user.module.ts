import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Services */
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';
import { AdminUserApiService } from './services/admin-user-api.service';

/* Components */
import { AdminUserManageComponent } from './admin-user-manage/admin-user-manage.component';

@NgModule({
  declarations: [AdminUserManageComponent],
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
      useClass: AdminUserApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: AdminUserManageComponent,
        editClass: AdminUserManageComponent,
        name: 'usuario de administración'
      }
    }
  ],
  exports: [AdminUserManageComponent]
})
export class PartialsAdminUserModule { }
