import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { DirectivesModule } from '@directive/directives.module';
import { CustomModalModule } from '@component/custom-modal/custom-modal.module';

/* Components */
import { GroupsComponent } from './groups/groups.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { TopicsComponent } from './topics/topics.component';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';
import { FinalizedModalComponent } from './finalized-modal/finalized-modal.component';

@NgModule({
  declarations: [
    GroupsComponent,
    DimensionsComponent,
    TopicsComponent,
    FinalizedModalComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbProgressbarModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    CustomModalModule
  ],
  exports: [
    GroupsComponent,
    DimensionsComponent,
    TopicsComponent,
    FinalizedModalComponent
  ],
  providers: [
    MaturityMatrix
  ]
})
export class PartialsMaturityMatrixModule { }
