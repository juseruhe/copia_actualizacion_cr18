import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllCityResolverService } from '@resolver/all-city/all-city-resolver.service';
import { AllDocumentTypeResolverService } from '@resolver/all-document-type/all-document-type-resolver.service';

/* Components */
import { AdminPersonComponent } from './admin-person.component';

const routes: Routes = [
  {
    path: 'person',
    component: AdminPersonComponent,
    resolve: {
      documentTypeList: AllDocumentTypeResolverService,
      cityList: AllCityResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPersonRoutingModule { }
