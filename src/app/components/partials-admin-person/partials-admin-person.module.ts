import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { CrudModalModule } from '@component/crud-modal/crud-modal.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { AdminPersonManageComponent } from './admin-person-manage/admin-person-manage.component';

/* Services */
import { AdminPersonApiService } from './services/admin-person-api.service';
import { ApiManageService } from '@component/crud-modal/services/api-manage.service';

@NgModule({
  declarations: [
    AdminPersonManageComponent
  ],
  imports: [
    CommonModule,
    CrudModalModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AdminPersonManageComponent
  ],
  providers: [
    {
      provide: ApiManageService,
      useClass: AdminPersonApiService
    },
    {
      provide: 'CRUD_CONFIG',
      useValue: {
        createClass: AdminPersonManageComponent,
        editClass: AdminPersonManageComponent,
        name: 'persona'
      }
    }
  ],
})
export class PartialsAdminPersonModule { }
