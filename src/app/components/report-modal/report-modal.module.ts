import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportModalComponent } from './report-modal.component';
import { PartialsDashboardModule } from '@component/partials-dashboard/partials-dashboard.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';



@NgModule({
  declarations: [ReportModalComponent],
  imports: [
    CommonModule,
    PartialsDashboardModule,
    Ng2SmartTableModule,
    FormsModule,
    CustomModalModule
  ],
  exports: [ReportModalComponent]
})
export class ReportModalModule { }
