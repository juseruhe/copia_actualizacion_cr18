import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { RecoverPasswordComponent } from './recover-password.component';

@NgModule({
  declarations: [
    RecoverPasswordComponent,
  ],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ]
})
export class RecoverPasswordModule { }
