import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AdminResultByPeriodRoutingModule } from './admin-result-by-period-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/* Components */
import { AdminResultByPeriodComponent } from './admin-result-by-period.component';

@NgModule({
  declarations: [AdminResultByPeriodComponent],
  imports: [
    CommonModule,
    AdminResultByPeriodRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    Ng2SmartTableModule
  ]
})
export class AdminResultByPeriodModule { }
