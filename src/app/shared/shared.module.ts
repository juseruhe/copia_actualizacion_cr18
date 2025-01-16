import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modules */
import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { PublicHeaderComponent } from './public-header/public-header.component';
import { ControlMessageInputComponent } from './control-message-input/control-message-input.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { CrudActionButtonComponent } from './crud-action-button/crud-action-button.component';

@NgModule({
  declarations: [
    PublicHeaderComponent,
    ControlMessageInputComponent,
    BreadcrumbComponent,
    FooterComponent,
    CrudActionButtonComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTooltipModule,
    RouterModule
  ],
  exports: [
    PublicHeaderComponent,
    ControlMessageInputComponent,
    BreadcrumbComponent,
    FooterComponent,
    CrudActionButtonComponent
  ]
})
export class SharedModule { }
