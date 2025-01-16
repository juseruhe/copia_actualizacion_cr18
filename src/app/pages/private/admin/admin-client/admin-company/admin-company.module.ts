import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AdminCompanyRoutingModule } from './admin-company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { PartialsAdminCompanyModule } from '@component/partials-admin-company/partials-admin-company.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/* Components */
import { AdminCompanyComponent } from './admin-company.component';

@NgModule({
  declarations: [AdminCompanyComponent],
  imports: [
    CommonModule,
    AdminCompanyRoutingModule,
    PartialsAdminCompanyModule,
    SharedModule,
    NgbProgressbarModule,
    NgxPaginationModule,
    Ng2SmartTableModule
  ]
})
export class AdminCompanyModule { }
