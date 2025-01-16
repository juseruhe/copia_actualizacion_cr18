import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { CustomPipesModule } from '@pipe/custom-pipes.module';

/**
 * Components
 */
import { ModalLayoutComponent } from './modal-layout/modal-layout.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    ModalLayoutComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule
  ],
  exports: [
    ModalLayoutComponent,
    ConfirmModalComponent
  ]
})
export class CustomModalModule { }
