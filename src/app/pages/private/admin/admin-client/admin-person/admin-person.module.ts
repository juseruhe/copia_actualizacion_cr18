import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AdminPersonRoutingModule } from './admin-person-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PartialsAdminPersonModule } from '@component/partials-admin-person/partials-admin-person.module';

/* Components */
import { AdminPersonComponent } from './admin-person.component';

@NgModule({
  declarations: [AdminPersonComponent],
  imports: [
    CommonModule,
    AdminPersonRoutingModule,
    PartialsAdminPersonModule,
    SharedModule,
    NgbProgressbarModule,
    Ng2SmartTableModule
  ]
})
export class AdminPersonModule { }
