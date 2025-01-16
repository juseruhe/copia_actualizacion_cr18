import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { BimPresentationRoutingModule } from './bim-presentation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { BimPresentationComponent } from './bim-presentation.component';

@NgModule({
  declarations: [BimPresentationComponent],
  imports: [
    CommonModule,
    BimPresentationRoutingModule,
    SharedModule
  ]
})
export class BimPresentationModule { }
