import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Modules */
import { EmailVerifyRoutingModule } from './email-verify-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { EmailVerifyComponent } from './email-verify.component';

@NgModule({
  declarations: [EmailVerifyComponent],
  imports: [
    CommonModule,
    EmailVerifyRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class EmailVerifyModule { }
