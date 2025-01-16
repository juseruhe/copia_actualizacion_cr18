import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllCityResolverService } from '@resolver/all-city/all-city-resolver.service';
import { AllDocumentTypeResolverService } from '@resolver/all-document-type/all-document-type-resolver.service';
import { AllProfileResolverService } from '@resolver/all-profile/all-profile-resolver.service';
import { AllRegionalResolverService } from '@resolver/all-regional/all-regional-resolver.service';

/* Components */
import { AdminProfileComponent } from './admin-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminProfileComponent,
    resolve: {
      documentTypeList: AllDocumentTypeResolverService,
      cityList: AllCityResolverService,
      roleList: AllProfileResolverService,
      regionalList: AllRegionalResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProfileRoutingModule { }
