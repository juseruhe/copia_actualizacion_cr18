import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllCategoryResolverService } from '@resolver/all-category/all-category-resolver.service';
import { AllCityResolverService } from '@resolver/all-city/all-city-resolver.service';
import { AllDocumentTypeResolverService } from '@resolver/all-document-type/all-document-type-resolver.service';
import { AllSizeCompanyResolverService } from '@resolver/all-size-company/all-size-company-resolver.service';

/* Components */
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      documentTypeList: AllDocumentTypeResolverService,
      sizeCompanyList: AllSizeCompanyResolverService,
      categoryList: AllCategoryResolverService,
      cityList: AllCityResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
