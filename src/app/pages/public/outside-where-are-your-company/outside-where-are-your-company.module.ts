import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { OutsideWhereAreYourCompanyRoutingModule } from './outside-where-are-your-company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { OutsideWhereAreYourCompanyComponent } from './outside-where-are-your-company.component';

@NgModule({
  declarations: [OutsideWhereAreYourCompanyComponent],
  imports: [
    CommonModule,
    OutsideWhereAreYourCompanyRoutingModule,
    SharedModule
  ]
})
export class OutsideWhereAreYourCompanyModule { }
