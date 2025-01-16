import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaNacionalComponent } from './encuesta-nacional.component';
import { PartialsLandingModule } from '@component/partials-landing/partials-landing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {EncuestaNacionalRoutingModule} from './encuesta-nacional-routing.module'



@NgModule({
  declarations: [EncuestaNacionalComponent],
  imports: [
    CommonModule,
    PartialsLandingModule,
    SharedModule,
    EncuestaNacionalRoutingModule
  ]
})
export class EncuestaNacionalModule { }
