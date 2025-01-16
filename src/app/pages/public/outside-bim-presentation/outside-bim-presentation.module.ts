import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { OutsideBimPresentationRoutingModule } from './outside-bim-presentation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { OutsideBimPresentationComponent } from './outside-bim-presentation.component';

@NgModule({
  declarations: [OutsideBimPresentationComponent],
  imports: [
    CommonModule,
    OutsideBimPresentationRoutingModule,
    SharedModule
  ]
})
export class OutsideBimPresentationModule { }
