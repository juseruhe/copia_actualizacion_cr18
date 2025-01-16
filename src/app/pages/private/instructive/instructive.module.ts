import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { InstructiveRoutingModule } from './instructive-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { InstructiveComponent } from './instructive.component';

@NgModule({
  declarations: [InstructiveComponent],
  imports: [
    CommonModule,
    InstructiveRoutingModule,
    SharedModule
  ]
})
export class InstructiveModule { }
