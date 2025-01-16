import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';

/* Components */
import { RoadMapModalComponent } from './road-map-modal/road-map-modal.component';



@NgModule({
  declarations: [RoadMapModalComponent],
  imports: [
    CommonModule,
    CustomModalModule
  ],
  exports: [RoadMapModalComponent]
})
export class PartialsRoadMapModule { }
