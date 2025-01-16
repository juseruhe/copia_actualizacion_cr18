import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { AdminDownloadRoutingModule } from './admin-download-routing.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AdminDownloadComponent } from './admin-download.component';

@NgModule({
  declarations: [AdminDownloadComponent],
  imports: [
    CommonModule,
    AdminDownloadRoutingModule,
    NgbProgressbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminDownloadModule { }
