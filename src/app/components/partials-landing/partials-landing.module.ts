import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';

/* Components */
import { YtModalComponent } from './yt-modal/yt-modal.component';


@NgModule({
  declarations: [YtModalComponent],
  imports: [
    CommonModule,
    CustomModalModule
  ],
  exports: [YtModalComponent]
})
export class PartialsLandingModule { }
