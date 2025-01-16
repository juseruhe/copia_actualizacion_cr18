import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { LandingRoutingModule } from './landing-routing.module';
import { PartialsLandingModule } from '@component/partials-landing/partials-landing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    PartialsLandingModule,
    SharedModule,
  ]
})
export class LandingModule { }
