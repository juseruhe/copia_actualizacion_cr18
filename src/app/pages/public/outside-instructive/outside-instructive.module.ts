import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { OutsideInstructiveRoutingModule } from './outside-instructive-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { OutsideInstructiveComponent } from './outside-instructive.component';

@NgModule({
  declarations: [OutsideInstructiveComponent],
  imports: [
    CommonModule,
    OutsideInstructiveRoutingModule,
    SharedModule
  ]
})
export class OutsideInstructiveModule { }
