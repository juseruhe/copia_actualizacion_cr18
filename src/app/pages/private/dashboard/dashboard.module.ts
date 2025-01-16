import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

/* Modules */
import { PartialsDashboardModule } from '@component/partials-dashboard/partials-dashboard.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

/* Components */
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
       
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    PartialsDashboardModule,
    Ng2SmartTableModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
