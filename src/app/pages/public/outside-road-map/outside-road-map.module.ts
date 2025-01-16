import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { OutsideRoadMapRoutingModule } from './outside-road-map-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { OutsideRoadMapComponent } from './outside-road-map.component';

@NgModule({
  declarations: [OutsideRoadMapComponent],
  imports: [
    CommonModule,
    OutsideRoadMapRoutingModule,
    SharedModule
  ]
})
export class OutsideRoadMapModule { }
