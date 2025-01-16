import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbCollapseModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/* Components */
import { ResultMatrixComponent } from './result-matrix/result-matrix.component';
import { ResultMatrixChartComponent } from './result-matrix-chart/result-matrix-chart.component';
import { ResultCategoryMatrixComponent } from './result-category-matrix/result-category-matrix.component';
import { AdminFilterComponent } from './admin-filter/admin-filter.component';
import { AdminCardsComponent } from './admin-cards/admin-cards.component';
import { AdminChartsComponent } from './admin-charts/admin-charts.component';
import { AdminResultComponent } from './admin-result/admin-result.component';

@NgModule({
  declarations: [ResultMatrixComponent,
    ResultMatrixChartComponent,
    ResultCategoryMatrixComponent,
    AdminFilterComponent,
    AdminCardsComponent,
    AdminChartsComponent,
    AdminResultComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbProgressbarModule,
    NgbCollapseModule,
    ChartsModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  exports: [ResultMatrixComponent,
    ResultMatrixChartComponent,
    ResultCategoryMatrixComponent,
    AdminFilterComponent,
    AdminCardsComponent,
    AdminChartsComponent,
    AdminResultComponent]
})
export class PartialsDashboardModule { }
