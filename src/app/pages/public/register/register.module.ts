import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartialsRegisterModule } from '@component/partials-register/partials-register.module';
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';

/* Components */
import { RegisterComponent } from './register.component';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    PartialsRegisterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CustomModalModule,
    NgxCaptchaModule
  ]
})
export class RegisterModule { }
