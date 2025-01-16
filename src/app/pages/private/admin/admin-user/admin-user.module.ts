import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { PartialsAdminUserModule } from '@component/partials-admin-user/partials-admin-user.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/* Components */
import { AdminUserComponent } from './admin-user.component';

@NgModule({
  declarations: [AdminUserComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    PartialsAdminUserModule,
    SharedModule,
    NgbProgressbarModule,
    Ng2SmartTableModule
  ],
  exports: [AdminUserComponent]
})
export class AdminUserModule { }
