import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { PendingVerifyRoutingModule } from './pending-verify-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { PendingVerifyComponent } from './pending-verify.component';

@NgModule({
  declarations: [PendingVerifyComponent],
  imports: [
    CommonModule,
    PendingVerifyRoutingModule,
    SharedModule
  ]
})
export class PendingVerifyModule { }
