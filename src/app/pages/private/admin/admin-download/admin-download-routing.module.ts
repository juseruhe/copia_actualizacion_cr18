import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AdminDownloadComponent } from './admin-download.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDownloadRoutingModule { }
