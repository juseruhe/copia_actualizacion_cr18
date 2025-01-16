import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { WhereAreYourCompanyRoutingModule } from './where-are-your-company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { WhereAreYourCompanyComponent } from './where-are-your-company.component';

@NgModule({
  declarations: [WhereAreYourCompanyComponent],
  imports: [
    CommonModule,
    WhereAreYourCompanyRoutingModule,
    SharedModule
  ]
})
export class WhereAreYourCompanyModule { }
