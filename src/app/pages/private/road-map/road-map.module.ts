import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { RoadMapRoutingModule } from './road-map-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartialsRoadMapModule } from '@component/partials-road-map/partials-road-map.module';

/* Components */
import { RoadMapComponent } from './road-map.component';
import { CustomPipesModule } from '@pipe/custom-pipes.module';

@NgModule({
  declarations: [RoadMapComponent],
  imports: [
    CommonModule,
    RoadMapRoutingModule,
    SharedModule,
    CustomPipesModule,
    PartialsRoadMapModule
  ]
})
export class RoadMapModule { }
