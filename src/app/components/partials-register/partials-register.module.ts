import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { CustomPipesModule } from '@pipe/custom-pipes.module';
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';

/* Components */
import { TermsModalComponent } from './terms-modal/terms-modal.component';


@NgModule({
  declarations: [TermsModalComponent],
  imports: [
    CommonModule,
    CustomPipesModule,
    CustomModalModule
  ],
  exports: [TermsModalComponent]
})
export class PartialsRegisterModule { }
