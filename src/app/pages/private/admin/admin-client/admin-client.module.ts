import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AdminClientRoutingModule } from './admin-client-routing.module';

/* Components */
import { AdminClientComponent } from './admin-client.component';

@NgModule({
  declarations: [AdminClientComponent],
  imports: [
    CommonModule,
    AdminClientRoutingModule
  ]
})
export class AdminClientModule { }
